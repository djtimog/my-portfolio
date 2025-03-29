"use client";
import React from "react";
import Header from "./Header";
import clsx from "clsx";
import { navLinks, socialLinks } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

function SideBar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={clsx("flex sticky top-0 h-screen min-w-max bg-secondary", className)}>
      <div className="h-full border-r">
        <Header className="flex-col space-y-5 border-b-0 shadow-0" />
      </div>

      <div className="w-full px-7 py-10 sticky top-0 border-r">
        <div className="text-center border-b pb-7">
          <div className="w-20 h-20 mx-auto mb-5 relative">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/profileImage.jpg" className="object-cover" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button
              size={"icon"}
              className="absolute right-0 bottom-0 translate-x-1 translate-y-1 rounded-full text-lg"
            >
              👋
              <span className="sr-only">Hey</span>
            </Button>
          </div>

          <h1 className="text-2xl font-bold">Christian Ogunleye</h1>
          <h3 className="text-md">Junior Frontend Developer</h3>

          <div className="flex items-center justify-center space-x-2 mt-3">
            {socialLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <Button size="icon" variant="outline" className="rounded-full">
                  <link.icon />
                  <span className="sr-only">{link.name}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between w-full space-y-7">
          <div className="flex flex-col space-y-3 mt-5 w-full items-start justify-center">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={`flex items-center hover:bg-gray-200 dark:hover:bg-gray-500 rounded-md w-full
                            ${
                              pathname === link.href
                                ? "bg-primary text-white dark:text-black"
                                : ""
                            }`}
              >
                <div className="flex items-center space-x-2 p-2 w-full">
                  <link.icon />
                  <span className="w-full">{link.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <Button className="w-full rounded-full">
            <Send />
            <span>Hire Me</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
