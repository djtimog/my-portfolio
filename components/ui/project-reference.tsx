import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ReferenceType } from "@/lib/types";

export default function ProjectReferences({ ref }: { ref: ReferenceType }) {
  return (
    <div className="text-lg flex items-center gap-5">
      <span className="font-bold text-2xl">{ref.label}: </span>
      {ref.link ? (
        <Link
          href={ref.link}
          target="_blank"
          className="underline text-blue-500 flex items-center gap-2"
        >
          <span>{ref.value}</span> <ExternalLink size={16} />
        </Link>
      ) : (
        <p>{ref.value}</p>
      )}
    </div>
  );
}
