import ProjectPage from "@/app/_component/ProjectPage";

export async function generateMetadata({
  params,
}: {
  params: { projectPath: string };
}) {
  return {
    title: `${params.projectPath.replace(/-/g, " ")} | Project`,
    description: `A project by Christian Ogunleye (Djtimog). Built with modern full stack web technologies.`,
    alternates: {
      canonical: `https://djtimog-portfolio.vercel.app/portfolio/${params.projectPath}`,
    },
  };
}

export default function Page() {
  return <ProjectPage />;
}
