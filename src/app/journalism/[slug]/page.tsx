import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalismProjectPage } from "@/components/journalism-project-page";
import { getJournalismProject, JOURNALISM_PROJECTS } from "@/lib/project-data";

interface JournalismProjectRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return JOURNALISM_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: JournalismProjectRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getJournalismProject(slug);

  if (!project) {
    return { title: "Journalism — HB" };
  }

  return {
    title: `${project.title} — HB`,
    description: `${project.title}, as heard on ${project.source}.`,
  };
}

export default async function JournalismProjectRoute({
  params,
}: JournalismProjectRouteProps) {
  const { slug } = await params;
  const project = getJournalismProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = JOURNALISM_PROJECTS.findIndex(
    (candidate) => candidate.slug === project.slug,
  );
  const previousProject = JOURNALISM_PROJECTS[projectIndex - 1];
  const nextProject = JOURNALISM_PROJECTS[projectIndex + 1];

  return (
    <JournalismProjectPage
      nextProject={nextProject}
      previousProject={previousProject}
      project={project}
    />
  );
}
