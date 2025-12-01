import clsx from "clsx";
import React from "react";

function MaxWidth({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx("max-w-7xl mx-auto", className)}>{children}</div>;
}

export default MaxWidth;
