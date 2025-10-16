import { FadeIn, SlideInBottom, SlideInRight } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { CopyRight } from "@/components/ui/copy-right";
import { languages } from "@/lib/data";
import { TypingText } from "@/lib/type-word";
import { ArrowRight, BookText, FileJson } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
                Im a passionate frontend developer and recent mathematics
                graduate with a strong foundation in logic, problem-solving, and
                clean UI design. I build responsive and user-friendly web apps
                using modern frontend tools. Explore my{" "}
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
                <Button className="rounded-full" size="lg">
                  <FileJson />
                  View Portfolio
                </Button>
                <Button className="rounded-full" size="lg">
                  <BookText />
                  View Resume
                </Button>
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
                1+
              </span>{" "}
              Years of Experience
            </div>
            <div className="text-lg flex items-center">
              <span className="text-gray-500 font-bold text-5xl pr-2 mr-2 border-r-3">
                7+
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
              <span className="font-semibold">frontend development</span>,
              crafting clean, responsive, and engaging web interfaces. My goal
              is to turn ideas into functional and visually appealing websites
              that work seamlessly across all devices.
              <br />
              <br />
              With a background in{" "}
              <span className="font-semibold">mathematics</span>, I bring
              logical thinking and precision into my code — ensuring every
              project is well-structured and optimized for performance.
              <br />
              <br />
              I&apos;m currently focused on improving my frontend skills while
              expanding into full-stack development. Want to know more about
              what I do? Check out my{" "}
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
                  freelance work, internships,
                </span>
                and{" "}
                <span className="font-semibold">collaborative projects</span>.
                If you&apos;re looking for a creative frontend developer
                who&apos;s passionate about building beautiful and functional
                web experiences, I&apos;d love to be part of your team or
                project.
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
