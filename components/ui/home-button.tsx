import { House } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

export function HomeButton() {
  return (
    <Link href="/">
      <Button
        variant={"outline"}
        size="icon"
        className="text-primary border-none rounded-full"
      >
        <House className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Home</span>
      </Button>
    </Link>
  );
}
