import { Button } from "@/components/ui/button";
import { TypingText } from "@/lib/type-word";
import { BookText, FileJson } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-7 sm:px-10 md:px-3 lg:px-5">
      <div className='border-b-2 pb-10' >
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <span className="text-2xl">HI, I'M A</span>
            <div className="banner-content">
              <h2 className="typing-text text-4xl font-bold">
                <TypingText />
              </h2>
            </div>
            <p className="text-lg">
              I'm a software engineer specializing in building scalable and
              efficient frontend web apps and websites. Explore my{" "}
              <Link href="/portfolio" className="text-blue-500">
                project portfolio
              </Link>
              , and{" "}
              <Link href="/resume" className="text-blue-500">
                online resume
              </Link>
              .
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
                <Image src="/profileImage.jpg" alt="user" className="object-cover w-full z-0" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-16 gap-5 flex flex-wrap">
          <div className="text-lg flex items-center"><span className="text-gray-500 font-bold text-5xl pr-2 mr-2 border-r-3">1+</span> Years of Experience</div>
          <div className="text-lg flex items-center"><span className="text-gray-500 font-bold text-5xl pr-2 mr-2 border-r-3">7+</span> Projects Completed</div>
        </div>
      </div>
    </div>
  );
}
