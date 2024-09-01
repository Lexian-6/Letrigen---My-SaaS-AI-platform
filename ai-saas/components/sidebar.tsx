"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";

const montseratt = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-pink-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-sky-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-purple-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-rose-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-emerald-800",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="py-4 flex flex-col h-full bg-gradient-to-b from-purple-950 via-red-700 to-pink-950 overflow-auto text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montseratt.className)}>
            Letrigen
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start " +
                  "font-medium cursor-pointer hover:text-white " +
                  "hover:bg-white/10 rounded-lg transition ",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
    </div>
  );
};

export default Sidebar;
