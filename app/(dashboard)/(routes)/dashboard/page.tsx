"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tool = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-blue-800",
    bgColor: "bg-blue-100",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-100",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-green-100",
  },
];
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Discover the potential of AI.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Experience ZenIQ - Embrace the serenity of smart interactions.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tool.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                {" "}
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
