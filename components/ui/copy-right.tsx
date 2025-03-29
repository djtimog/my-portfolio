import Link from "next/link";
import React from "react";

export function CopyRight() {
  return (
    <div>
      <p className="text-lg font-bold">
        Copyright ©2025 <Link href={"/"} className="text-blue-500">DJ.timog</Link>. All Rights Reserved.
      </p>
    </div>
  );
}
