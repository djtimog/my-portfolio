import { FadeIn, SlideInBottom, SlideInRight } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { CopyRight } from "@/components/ui/copy-right";
import { languages, projects } from "@/lib/data";
import { TypingText } from "@/lib/type-word";
import { ArrowRight, BookText, FileJson } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Christian Ogunleye | Full Stack Developer",
  description:
    "Hi, I'm Christian Ogunleye (Djtimog) — a Full Stack Developer from Lagos, Nigeria. I build modern web apps using React, Next.js, Node.js, and PostgreSQL.",
  alternates: { canonical: "https://djtimog-portfolio.vercel.app" },
};

export default function Home() {
  const date = new Date();
  // const startingDate = new Date("April 29, 2024");

  return (
    <div className="px-7 sm:px-10 md:px-3 lg:px-5">
      <FadeIn>
        <div className="border-b-2 pb-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <span className="text-2xl">HI, I&apos;M A</span>
              <div className="banner-content">
                <h2 className="typing-text text-5xl font-bold">
                  <TypingText />
                </h2>
              </div>
              <p className="text-lg">
                I&apos;m Christian Ogunleye, a full stack developer and
                Mathematics graduate with a strong foundation in logic,
                problem-solving, and scalable application design. I build
                end-to-end web applications and backend APIs using modern
                technologies — from responsive React frontends to secure Node.js
                services and production-ready databases. Explore my{" "}
                <Link href="/portfolio" className="text-blue-500">
                  Project portfolio
                </Link>{" "}
                and{" "}
                <Link href="/resume" className="text-blue-500">
                  Resume
                </Link>{" "}
                to learn more about my work.
              </p>

              <div className="flex space-x-3 mt-5">
                <Link href="/portfolio" className="cursor-pointer">
                  <Button className="rounded-full" size="lg">
                    <FileJson />
                    View Portfolio
                  </Button>
                </Link>
                <Link href="/resume" className="cursor-pointer">
                  <Button className="rounded-full" size="lg">
                    <BookText />
                    View Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative z-0">
                <div className="user-bg z-0"></div>
                <div className="w-[280px] h-[280px] absolute top-0 overflow-hidden z-0">
                  <Image
                    src="/profileImage.jpg"
                    alt="user"
                    className="object-cover w-full z-0"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-16 gap-7 flex flex-wrap">
            <div className="text-lg flex items-center">
              <span className="text-gray-500 font-bold text-5xl pr-2 mr-2 border-r-3">
                {date.getFullYear() - 2024}+
              </span>{" "}
              Years of Experience
            </div>
            <div className="text-lg flex items-center">
              <span className="text-gray-500 font-bold text-5xl pr-2 mr-2 border-r-3">
                {projects.length}+
              </span>{" "}
              Projects Completed
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="py-10">
        <SlideInRight>
          <div>
            <h1 className="border-l-4 text-5xl px-3 font-bold mb-5">
              What I Do
            </h1>
            <p className="text-lg">
              I specialize in{" "}
              <span className="font-semibold">full stack development</span>,
              building clean, responsive frontends with React and Next.js
              alongside robust backend APIs with Node.js and Express. I design
              and manage both relational and NoSQL databases, implement secure
              authentication systems, and deploy production-ready applications
              end to end.
              <br />
              <br />
              With a background in{" "}
              <span className="font-semibold">Mathematics</span>, I bring
              analytical thinking and precision into everything I build — from
              architecting database schemas to debugging complex API behavior. I
              also work with AI APIs, integrating LLMs like Claude and Gemini
              into real products that solve everyday problems.
              <br />
              <br />
              I&apos;m currently expanding into{" "}
              <span className="font-semibold">
                Python, Go, and AI/ML engineering
              </span>{" "}
              to build faster, smarter backend systems. Want to know more? Check
              out my{" "}
              <Link href="/portfolio" className="text-blue-500">
                Project portfolio
              </Link>{" "}
              or{" "}
              <Link href="/resume" className="text-blue-500">
                Resume
              </Link>
              .
            </p>
          </div>
        </SlideInRight>

        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-7">
          {languages.map((language) => (
            <SlideInBottom key={language.name}>
              <div className="fade-up w-full min-h-max space-y-4 p-5 bg-secondary hover:border-2 border-primary">
                <language.icon className="w-12 h-auto" />
                <h2 className="text-2xl font-bold">{language.name}</h2>
                <p className="text-lg">{language.description}</p>
              </div>
            </SlideInBottom>
          ))}
        </div>
      </div>

      <div className="pb-10">
        <SlideInRight>
          <div>
            <h1 className="text-center text-4xl px-3 font-bold mb-5">
              Where I See Myself in 5 Years
            </h1>
            <p className="text-lg">
              In five years, I see myself as a well-rounded Software Engineer
              working across the full stack and contributing to AI-powered
              products that reach millions of users. I want to be part of a team
              that values engineering quality, fast execution, and real impact —
              where I can design scalable backend systems, ship meaningful
              features, and help shape product direction with data and logic.
              <br />
              <br />
              I also see myself going deep into AI/ML engineering — building
              intelligent systems that go beyond standard API integrations and
              into actual model deployment and automation pipelines. My
              Mathematics background gives me a foundation to understand the
              theory behind what I build, not just the syntax.
              <br />
              <br />
              Long term, I want to build products of my own that solve real
              problems in Africa and beyond — and mentor the next generation of
              Nigerian developers coming up behind me.
            </p>
          </div>
        </SlideInRight>
      </div>

      <div>
        <SlideInRight>
          <div className="grid lg:grid-cols-[1fr_200px] gap-7 mb-16">
            <div className="space-y-5">
              <h1 className="text-5xl font-bold">
                Let&apos;s Build Something Great Together
              </h1>
              <p className="text-lg mt-3">
                I&apos;m currently open to{" "}
                <span className="font-semibold">
                  internships, NYSC placements, freelance work,
                </span>{" "}
                and{" "}
                <span className="font-semibold">collaborative projects</span>.
                If you&apos;re looking for a full stack developer who ships
                clean, reliable software and genuinely cares about what gets
                built, I&apos;d love to be part of your team or project.
                <br />
                <br />
                Let&apos;s connect and turn your ideas into reality!
              </p>
            </div>
            <div className="lg:flex items-center justify-center">
              <Link href={"/contact"}>
                <Button className="rounded-full" size="lg">
                  {" "}
                  <ArrowRight />
                  Let&apos;s Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </SlideInRight>

        <CopyRight />
      </div>
    </div>
  );
}
