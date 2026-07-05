import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SkillGroup from "@/components/SkillGroup";
import StoryCard from "@/components/StoryCard";
import { getStories, profile } from "@/lib/profile";
import styles from "./page.module.css";

export default function Home() {
  const { personal, skills, projects } = profile;
  const featuredProjects = projects.filter((project) => project.featured);
  const latestStories = getStories().slice(0, 2);

  return (
    <div className="container">
      <section className={styles.hero} aria-label="Introduction">
        <p className={styles.heroKicker}>{personal.location}</p>
        <h1 className={styles.heroName}>{personal.name}</h1>
        <p className={styles.heroTitle}>{personal.title}</p>
        <p className={styles.heroTagline}>{personal.tagline}</p>
        <p className={styles.heroBio}>{personal.bio}</p>
        <div className={styles.heroActions}>
          <Link href="/projects" className={styles.primaryButton}>
            View my work
          </Link>
          <a href={`mailto:${personal.email}`} className={styles.secondaryButton}>
            Get in touch
          </a>
        </div>
      </section>

      <Section id="skills" title="Skills">
        <div className={styles.skillsGrid}>
          {skills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </Section>

      <Section
        id="featured-projects"
        title="Featured Projects"
        viewAll={{ href: "/projects", label: "All projects" }}
      >
        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        id="latest-stories"
        title="Latest Stories"
        viewAll={{ href: "/stories", label: "All stories" }}
      >
        <div className={styles.storiesGrid}>
          {latestStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </Section>

      <section className={styles.contact} aria-label="Contact">
        <h2>Let&apos;s work together</h2>
        <p className={styles.contactText}>
          Have a project in mind, or just want to talk shop about AI agents and
          web engineering? My inbox is open.
        </p>
        <a href={`mailto:${personal.email}`} className={styles.primaryButton}>
          {personal.email}
        </a>
      </section>
    </div>
  );
}
