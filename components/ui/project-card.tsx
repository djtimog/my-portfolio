"use client";

import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./button";
import { Project } from "@/lib/types";
import { SlideInBottom } from "../animation";

export function ProjectCard({ project }: { project: Project }) {
  const projectImageBoxRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleMouseEnter = () => {
    if (imageRefs.current[0] && imageRefs.current[1]) {
      imageRefs.current[0].classList.add("firstImageBlurOut");
      imageRefs.current[0].classList.remove("firstImageBlurIn");

      imageRefs.current[1].classList.add("secondImageBlurIn");
      imageRefs.current[1].classList.remove("secondImageBlurOut");
    }
  };

  const handleMouseLeave = () => {
    if (imageRefs.current[0] && imageRefs.current[1]) {
      imageRefs.current[0].classList.remove("firstImageBlurOut");
      imageRefs.current[0].classList.add("firstImageBlurIn");

      imageRefs.current[1].classList.remove("secondImageBlurIn");
      imageRefs.current[1].classList.add("secondImageBlurOut");
    }
  };

  return (
    <SlideInBottom>
      <div>
        <div
          ref={projectImageBoxRef}
          className="h-[300px] relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {project.images.map((image, index) => (
            <Image
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              src={image}
              alt={`${project.path} image ${index}`}
              width={800}
              height={350}
              className={`w-full h-full absolute top-0 left-0 ${
                index === 0 ? "firstImageBlurIn" : "secondImageBlurOut"
              }`}
            />
          ))}
        </div>

        <div className="py-5 flex justify-between items-center">
          <div>
            <div className="flex gap-3 flex-wrap pb-3">
              {project.technologies.map((tech, index) => (
                <p key={index} className="rounded-full border px-3 py-1">
                  {tech}
                </p>
              ))}
            </div>

            <Link href={`/portfolio/${project.path}`}>
              <h2 className="hover:text-blue-500 font-bold text-2xl">
                {project.title}
              </h2>
            </Link>
          </div>

          <Link
            href={project.liveHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="icon"
              variant="outline"
              className="hover:rotate-180 duration-1000 rounded-full"
            >
              <Eye />
            </Button>
          </Link>
        </div>
      </div>
    </SlideInBottom>
  );
}
