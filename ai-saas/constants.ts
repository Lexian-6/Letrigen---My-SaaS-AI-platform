import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 6;

export const TOOLS = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-sky-700",
    bgColor: "bg-sky-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-emerald-800",
    bgColor: "bg-emerald-800/10",
    href: "/code",
  },
];
