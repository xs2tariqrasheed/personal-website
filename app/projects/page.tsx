import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/lib/profile";
import styles from "./page.module.css";

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
      <header className={styles.pageHeader}>
        <h1>Projects</h1>
        <p className={styles.pageIntro}>
          A selection of things I&apos;ve built — from AI agent frameworks to
          production web apps.
        </p>
      </header>
      <div className={styles.grid}>
        {profile.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
