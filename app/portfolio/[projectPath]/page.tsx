import ProjectPage from "@/app/_component/ProjectPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectPath: string }>;
}) {
  const { projectPath } = await params;

  return {
    title: `${projectPath.replace(/-/g, " ")} | Project`,
    description: `A project by Christian Ogunleye (Djtimog). Built with modern full stack web technologies.`,
    alternates: {
      canonical: `https://djtimog-portfolio.vercel.app/portfolio/${projectPath}`,
    },
  };
}

export default function Page() {
  return <ProjectPage />;
}
