import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandProjectPage } from "@/components/brand-project-page";
import { BRAND_PROJECTS, getBrandProject } from "@/lib/project-data";

interface BrandProjectRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BRAND_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: BrandProjectRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getBrandProject(slug);

  if (!project) {
    return { title: "Brand work — HB" };
  }

  return {
    title: `${project.title} — HB`,
    description:
      project.layout === "gallery"
        ? project.summary
        : `${project.title}: ${project.tagline}.`,
  };
}

export default async function BrandProjectRoute({
  params,
}: BrandProjectRouteProps) {
  const { slug } = await params;
  const project = getBrandProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getBrandProject(project.nextSlug);

  if (!nextProject) {
    notFound();
  }

  return <BrandProjectPage nextProject={nextProject} project={project} />;
}
