import { NextResponse } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemMessage = {
  role: "system",
  content: `You are an AI code generation assistant. Your primary function is to generate code snippets based on user requests. Please adhere to the following guidelines:

1. Always respond with code snippets enclosed in Markdown code blocks.
2. Use the appropriate language syntax highlighting in the code blocks.
3. Provide brief explanations or comments within the code when necessary.
4. If clarification is needed, briefly ask for it within a code comment.
5. For complex requests, you may split the response into multiple code blocks with short explanations between them.

Remember, your main output should always be code.`,
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // Using a more capable model for code generation
      messages: [systemMessage, ...messages],
      temperature: 0.7, // Slightly lower temperature for more focused outputs
    });

    if (!isPro) {
      await increaseApiLimit();
    }

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CODE_GENERATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
