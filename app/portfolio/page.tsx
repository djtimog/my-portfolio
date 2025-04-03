import { FadeIn } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { CopyRight } from "@/components/ui/copy-right";
import { ProjectCard } from "@/components/ui/project-card";
import { Send } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div className="space-y-17">
      <FadeIn>
        <div className="space-y-4 text-center border-b pb-7">
          <h2 className="font-bold text-4xl">A Glimpse of My Projects</h2>
          <p>
            Over the years, I have refined my frontend development skills,
            focusing on crafting responsive, user-friendly, and visually
            engaging interfaces. Here are some standout projects that showcase
            my expertise in modern frontend technologies, including React,
            Next.js, and Tailwind CSS.
          </p>
          <Link href="/contact#send_me_message">
            <Button className="rounded-full" size={"lg"}>
              <Send />
              <span>Hire Me</span>
            </Button>
          </Link>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-7">
        <ProjectCard
          title="Blogging Platform"
          technologies={["laravel", "livewire", "mysql"]}
          path="project"
          images={["/demo-app.webp", "/demo-app.png"]}
          liveHref="#"
        />
      </div>

      <CopyRight />
    </div>
  );
}
