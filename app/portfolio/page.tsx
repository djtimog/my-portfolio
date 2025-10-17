import { FadeIn } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { CopyRight } from "@/components/ui/copy-right";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { Send } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div className="space-y-17">
      <FadeIn>
        <div className="space-y-4 text-center border-b pb-7">
          <h2 className="font-bold text-4xl">My Recent Works</h2>
          <p className="text-lg text-muted-foreground">
            I&apos;m a self-taught developer with a strong foundation in
            <strong> Mathematics</strong> and a growing passion for the frontend
            world. Since I began learning web development in
            <strong> April 2024</strong>, I&apos;ve come a long way — turning
            ideas into smooth, responsive, and visually appealing web
            experiences. Each project you&apos;ll find here reflects my love for
            <strong> design</strong>, <strong>interactivity</strong>, and
            <strong> problem-solving</strong> using tools like
            <strong> React</strong>, <strong>Next.js</strong>, and
            <strong> Tailwind CSS</strong>.
          </p>

          <Link href="/contact#send_me_message">
            <Button className="rounded-full mt-4" size={"lg"}>
              <Send />
              <span>Let&apos;s Work Together</span>
            </Button>
          </Link>
        </div>
      </FadeIn>

      <div className="grid p-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-7">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.path} />
        ))}
      </div>

      <CopyRight />
    </div>
  );
}
