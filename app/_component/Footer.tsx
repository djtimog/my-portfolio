"use client";
import { navLinks } from "@/lib/data";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Footer({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <footer
      className={clsx(
        "w-full flex justify-between align-center p-4 sticky bottom-0 border-t bg-secondary",
        className
      )}
    >
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className={`flex items-center hover:bg-gray-200 dark:hover:bg-gray-500 rounded-md w-full
                            ${
                              pathname === link.href
                                ? "bg-primary text-white dark:text-black hover:text-black"
                                : ""
                            }`}
        >
          <div className="flex items-center justify-center sm:space-x-2 p-2 w-full">
            <link.icon />
            <span className="hidden sm:block">{link.name}</span>
          </div>
        </Link>
      ))}
    </footer>
  );
}

export default Footer;
