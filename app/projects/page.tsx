import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects built by ${profile.personal.name} — web apps, AI agents, RAG pipelines, and open-source tools.`,
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="container">
      <header className="pb-10 pt-14">
        <h1>Projects</h1>
        <p className="mt-3 max-w-[40rem] text-fg-muted">
          A selection of things I&apos;ve built — from AI agent frameworks to
          production web apps.
        </p>
      </header>
      <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 wide:grid-cols-3">
        {profile.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
