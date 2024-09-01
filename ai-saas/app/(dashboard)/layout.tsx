import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 bg-gradient-to-b from-purple-950 via-red-700 to-pink-950">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className="md:pl-60">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
