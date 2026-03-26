"use client";
import { FadeIn, SlideInBottom } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { CopyRight } from "@/components/ui/copy-right";
import {
  experiences,
  interests,
  projects,
  skills,
  socialLinks,
} from "@/lib/data";
import {
  ChevronsDown,
  ChevronsUp,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa6";

export default function Resume() {
  const [wantMore, setWantMore] = useState(false);
  const lessProjects = projects.slice(0, 4);
  const viewedProjects = wantMore ? projects : lessProjects;

  return (
    <div className="space-y-17">
      <FadeIn>
        <div className="space-y-4 text-center border-b pb-7">
          <h2 className="font-bold text-4xl">Online Resume</h2>
          <Link
            href={"/resume-v02.pdf"}
            target="_blank"
            download="resume-v02.pdf"
          >
            <Button className="rounded-full">
              <FaRegFilePdf />
              Download PDF Version
            </Button>
          </Link>
        </div>
      </FadeIn>

      <SlideInBottom>
        <div className="border rounded-lg p-7 space-y-7 bg-secondary">
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between sm:items-center md:items-start lg:items-center border-b-2 p-4 gap-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">
                Ogunleye Christian Timileyin
              </h2>
              <h6 className="text-lg">Frontend Developer</h6>
              <p className="text-sm text-muted-foreground">
                Also known as <strong>Djtimog</strong>
              </p>
            </div>

            <div className="sm:border-l-2 md:border-l-0 lg:border-l-2  space-y-2">
              <Link
                href="tel:+2348146289722"
                className="flex gap-2 px-2 items-center"
              >
                <Phone size={16} strokeWidth={1} />
                0814-628-9722
              </Link>
              <Link
                href="mailto:ogunleyetimilehin15@gmail.com"
                className="flex gap-2 px-2 items-center"
              >
                <Mail size={16} strokeWidth={1} />
                ogunleyetimilehin15@gmail.com
              </Link>
              <Link
                href="https://my-portfolio-one-pearl-59.vercel.app"
                className="flex gap-2 px-2 items-center"
              >
                <Globe size={16} strokeWidth={1} />
                My Portfolio Website
              </Link>
              <div className="flex gap-2 px-2 items-center cursor-pointer">
                <MapPin size={16} strokeWidth={1} />
                Lagos, Nigeria
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-center border-b-2 p-4 pb-7 gap-4">
            <div>
              <div className="max- w-[190px] h-[190px] overflow-hidden bg-red-500 rounded-full">
                <Image
                  src="/profileImage.jpg"
                  alt="user"
                  className="object-cover z-0"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <p className="text-sm">
              I am <strong>Ogunleye Christian Timileyin</strong>, a passionate
              <strong> Frontend Developer</strong> with a background in
              <strong> Mathematics</strong>. I specialize in building
              interactive, responsive, and visually appealing web interfaces
              using modern technologies like <strong>React.js</strong>,
              <strong> Next.js</strong>, <strong>Tailwind CSS</strong>, and
              <strong> JavaScript (ES6+)</strong>.
              <br />
              <br />
              I focus on crafting clean and maintainable code, ensuring smooth
              performance, accessibility, and responsiveness across devices. I
              enjoy working collaboratively, learning new technologies, and
              turning creative ideas into functional web experiences.
              <br />
              <br />
              I&apos;m continuously learning new frameworks and tools to stay
              updated with the latest development trends , always aiming to
              deliver modern, high-quality digital experiences. 🚀
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 border-b-2 p-4 pb-7 gap-4">
            <div className="lg:col-span-2 px-4 space-y-10">
              <div>
                <h1 className="border-l-4 text-3xl px-3 font-bold mb-5">
                  Experience
                </h1>

                <div className="space-y-7">
                  {experiences.map((exp, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">{exp.role}</h2>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>

                      <p className="text-md font-semibold">{exp.duration}</p>

                      <p className="mt-2 text-sm">{exp.description}</p>

                      <ul className="list-disc pl-7 mt-2 text-sm space-y-1">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="border-l-4 text-3xl px-3 font-bold mb-5">
                  Projects
                </h1>
                <div className="space-y-8">
                  {viewedProjects.map((project, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">{project.title}</h2>
                        {project.projectType && (
                          <p className="text-sm text-muted-foreground">
                            {project.projectType}
                          </p>
                        )}
                      </div>

                      {(project.year || project.duration) && (
                        <p className="text-sm font-semibold text-muted-foreground">
                          {project.year ? project.year : ""}
                          {project.duration ? `(${project.duration})` : ""}
                        </p>
                      )}

                      <p className="text-sm leading-relaxed">
                        {project.highlight || project.overview}
                      </p>

                      {project.features && project.features.length > 0 && (
                        <ul className="list-disc pl-7 text-sm space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      )}

                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <p className="text-xs text-muted-foreground italic">
                            Tech: {project.technologies.join(", ")}
                          </p>
                        )}
                    </div>
                  ))}
                  <div className="flex justify-end mt-2">
                    <p
                      onClick={() => setWantMore(!wantMore)}
                      className="text-sm font-medium cursor-pointer text-muted-foreground w-max"
                    >
                      {wantMore ? (
                        <span className="flex items-center space-x-2">
                          Less <ChevronsUp size={20} />
                        </span>
                      ) : (
                        <span className="flex items-center space-x-2">
                          More <ChevronsDown size={20} />
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:border-l-2 md:border-l-0 lg:border-l-2 sm:px-4 md:px-0 lg:px-5 space-y-7">
              <h1 className="border-l-4 text-3xl px-3 font-bold mb-5">
                Skills
              </h1>
              {skills.map((group, index) => (
                <div key={index} className="mb-5">
                  <h2 className="text-xl font-bold mb-2">{group.category}</h2>

                  <ul className="space-y-3">
                    {group.items.map((skill, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <skill.icon className="text-lg mt-1" />
                        <div>
                          <p className="font-semibold">{skill.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h1 className="border-l-4 text-3xl px-3 font-bold mb-5">
                  Interests
                </h1>
                <ul className="list-disc pl-7 space-y-2">
                  {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-3">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="max-w-max"
                target="_blank"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full mx-3"
                >
                  <link.icon />
                  <span className="sr-only">{link.name}</span>
                </Button>
                <span>{link.account}</span>
              </Link>
            ))}
          </div>
        </div>
      </SlideInBottom>

      <CopyRight />
    </div>
  );
}
