import Tag from "@/components/Tag";
import type { Project } from "@/lib/profile";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-3 rounded-card border border-border bg-bg-elevated p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent">
      <h3 className="text-[1.1rem]">{project.name}</h3>
      <p className="flex-1 text-[0.95rem] text-fg-muted">{project.description}</p>
      <div className="flex flex-wrap gap-[0.4rem]">
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className="flex gap-5">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener"
            className="text-sm text-accent hover:underline"
          >
            GitHub ↗
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener"
            className="text-sm text-accent hover:underline"
          >
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}
