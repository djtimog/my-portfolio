import { Metadata } from "next";
import Resume from "../_component/Resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View the resume of Christian Ogunleye — Full Stack Developer with experience in React, Next.js, Node.js, GraphQL, and PostgreSQL.",
  alternates: { canonical: "https://djtimog-portfolio.vercel.app/resume" },
};

export default function Page() {
  return <Resume />;
}
