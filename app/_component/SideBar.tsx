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
import { SlideInLeft } from "@/components/animation";

function SideBar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <SlideInLeft>
      <div
        className={clsx(
          "flex sticky top-0 h-screen min-w-max bg-secondary",
          className
        )}
      >
        <div className="h-full border-r">
          <Header className="flex-col space-y-5 border-b-0 shadow-0" />
        </div>

        <div className="w-full px-7 py-10 sticky top-0 border-r flex flex-col">
          <div className="text-center border-b pb-7">
            <div className="w-20 h-20 mx-auto mb-5 relative">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/profileImage.jpg" className="object-cover" />
                <AvatarFallback>CO</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute right-0 bottom-0 translate-x-1 translate-y-1 rounded-full text-lg wave-hover"
              >
                👋
                <span className="sr-only">Hey</span>
              </Button>
            </div>

            <h1 className="text-2xl font-bold">Christian Ogunleye</h1>
            <h3 className="text-md text-muted-foreground">
              Frontend Developer
            </h3>

            <div className="flex items-center justify-center space-x-2 mt-3">
              {socialLinks.map((link) => (
                <Link href={link.href} key={link.name} target="_blank">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full hover:bg-primary hover:text-white transition"
                  >
                    <link.icon />
                    <span className="sr-only">{link.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3 mt-5">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={clsx(
                  "flex items-center space-x-2 p-2 w-full rounded-md transition hover:bg-primary/10 hover:text-primary",
                  pathname === link.href &&
                    "bg-primary text-white dark:text-black font-medium"
                )}
              >
                <link.icon />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/contact#send_me_message">
              <Button className="w-full rounded-full flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Hire Me</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SlideInLeft>
  );
}

export default SideBar;
