import React from "react";

function MaxWidth({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl">{children}</div>;
}

export default MaxWidth;
