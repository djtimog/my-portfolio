import { Button } from "@/components/ui/button";
import { CopyRight } from "@/components/ui/copy-right";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegFilePdf } from "react-icons/fa6";

export default function Resume() {
  return (
    <div className="space-y-11">
      <div className="space-y-4 text-center border-b pb-7">
        <h2 className="font-bold text-2xl">Online Resume</h2>
        <Button className="rounded-full">
          <FaRegFilePdf />
          Download PDF Version
        </Button>
      </div>

      <div className="border rounded-lg p-7 py-7 space-y-7">
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between sm:items-center md:items-start lg:items-center border-b-2 p-4 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Christian Ogunleye</h2>
            <h6 className="text-lg">Junior Frontend Developer</h6>
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
              href="mailto:ogunleyetimihin15@gmail.com"
              className="flex gap-2 px-2 items-center"
            >
              <Mail size={16} strokeWidth={1} />
              Ogunleyetimihin15@gmail.com
            </Link>
            <Link href="/" className="flex gap-2 px-2 items-center">
              <Globe size={16} strokeWidth={1} />
              My website
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
            I am Ogunleye Christian, a frontend developer with a strong passion
            for building interactive, user-friendly, and visually appealing web
            applications. I specialize in modern frontend technologies such as
            React.js, Next.js, Tailwind CSS, and JavaScript (ES6+), ensuring
            seamless user experiences across different devices.
            <br />
            With a keen eye for design and performance, I focus on writing
            clean, maintainable, and efficient code while ensuring that
            applications are responsive, accessible, and optimized for speed. I
            thrive in team environments, collaborating closely with designers
            and backend developers to bring ideas to life.
            <br />
            My expertise in state management (Redux, Zustand), UI libraries, and
            API integration (REST & GraphQL) allows me to build dynamic and
            scalable applications that enhance user engagement. Whether
            developing from scratch or improving existing systems, I am
            committed to delivering high-quality, intuitive, and scalable
            solutions that meet user needs.
            <br />I am continuously learning and refining my skills to stay up
            to date with the latest industry trends, ensuring I can always
            provide modern, innovative, and efficient frontend solutions. 🚀
          </p>
        </div>

        {/* two more */}
      </div>
      <CopyRight />
    </div>
  );
}
