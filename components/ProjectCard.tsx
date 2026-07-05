import Tag from "@/components/Tag";
import type { Project } from "@/lib/profile";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className={styles.links}>
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener"
            className={styles.link}
          >
            GitHub ↗
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener"
            className={styles.link}
          >
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}
