"use client";

import { FadeIn, SlideInBottom, SlideInRight } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { CopyRight } from "@/components/ui/copy-right";
import { projects } from "@/lib/data";
import {
  ArrowLeftFromLine,
  ArrowRight,
  ArrowRightFromLine,
  BadgeAlert,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const { projectPath } = useParams();
  const project = projects.find((p) => p.path === projectPath);

  if (!project) {
    return (
      <FadeIn>
        <div className="space-y-4 text-center border-b pb-7">
          <div className="flex justify-center items-center gap-2 text-red-500">
            <BadgeAlert size={50} />
            <h2 className="font-extrabold text-6xl">Error 404</h2>
          </div>
          <h2 className="font-bold text-4xl">Project Not Found</h2>
          <Link href="/portfolio">
            <Button className="rounded-full">
              <ArrowLeftFromLine />
              Return to Previous Page
            </Button>
          </Link>
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="space-y-15">
      <FadeIn>
        <div className="space-y-4 text-center border-b pb-7">
          <h2 className="font-bold text-4xl">Project Title: {project.title}</h2>
          <p className="max-w-3xl mx-auto text-lg">{project.overview}</p>
          <Link href="/contact#send_me_message">
            <Button className="rounded-full" size="lg">
              <Send />
              <span>Hire Me</span>
            </Button>
          </Link>
        </div>
      </FadeIn>

      <div className="space-y-10 p-7 pt-4">
        <SlideInBottom>
          <h2 className="font-bold text-4xl mb-10 text-center">
            Project Details
          </h2>

          <div className="gap-7 flex flex-col lg:flex-row">
            <div className="border p-4 rounded-lg space-y-3">
              <div>
                <p className="text-lg">Client:</p>
                <h4 className="text-xl font-bold">{project.client}</h4>
              </div>
              <div>
                <p className="text-lg">Services:</p>
                <h4 className="text-xl font-bold">{project.services}</h4>
              </div>
              <div>
                <p className="text-lg">Role:</p>
                <h4 className="text-xl font-bold">{project.role}</h4>
              </div>
              <div>
                <p className="text-lg">Technologies:</p>
                <ul className="list-none text-xl font-bold flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-lg">Preview:</p>
                <Link
                  href={project.liveHref}
                  target="_blank"
                  className="hover:text-blue-600 text-xl font-bold flex items-center gap-2"
                >
                  <span>Live Preview</span>
                  <ArrowRightFromLine />
                </Link>
              </div>
              <div>
                <p className="text-lg">GitHub Link:</p>
                <Link
                  href={project.githubHref}
                  target="_blank"
                  className="hover:text-blue-600 text-xl font-bold flex items-center gap-2"
                >
                  <span>Source Code</span>
                  <ArrowRightFromLine />
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-h-[400px]">
              <Image
                src={project.images[0]}
                alt={project.title}
                width={800}
                height={400}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </SlideInBottom>

        <SlideInBottom>
          <div>
            <h3 className="font-bold text-4xl mb-4 text-center">
              Project Features
            </h3>
            <ul className="text-lg list-disc list-inside space-y-3 p-3">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </SlideInBottom>

        <FadeIn>
          <div>
            <h2 className="font-bold text-5xl mb-4">Project Overview</h2>
            <p className="text-lg p-3">{project.overview}</p>
          </div>
        </FadeIn>
      </div>

      <SlideInRight>
        <div className="grid lg:grid-cols-[1fr_200px] gap-7 mb-16">
          <div className="space-y-5">
            <h1 className="text-5xl font-bold">
              Let&apos;s Work Together on Your Next Project
            </h1>
            <p>
              I am available for freelance projects. Hire me and get your
              project done.
            </p>
          </div>
          <div className="lg:flex items-center justify-center">
            <Link href={"/contact"}>
              <Button className="rounded-full" size="lg">
                <ArrowRight />
                Let&apos;s Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </SlideInRight>

      <CopyRight />
    </div>
  );
}
