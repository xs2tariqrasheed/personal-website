import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SkillGroup from "@/components/SkillGroup";
import StoryCard from "@/components/StoryCard";
import { getStories, profile } from "@/lib/profile";

const primaryButton =
  "inline-block rounded-full bg-accent px-[1.4rem] py-[0.6rem] text-[0.95rem] font-medium text-white transition-opacity hover:opacity-[0.85]";
const secondaryButton =
  "inline-block rounded-full border border-border px-[1.4rem] py-[0.6rem] text-[0.95rem] font-medium text-fg transition-colors hover:border-border-hover";

export default function Home() {
  const { personal, skills, projects } = profile;
  const featuredProjects = projects.filter((project) => project.featured);
  const latestStories = getStories().slice(0, 2);

  return (
    <div className="container">
      <section
        className="flex flex-col-reverse items-start gap-8 pb-20 pt-16 nav:flex-row nav:items-center nav:gap-12 wide:pb-28 wide:pt-24"
        aria-label="Introduction"
      >
        <div className="flex-1">
          <p className="mb-3 font-mono text-[0.85rem] text-fg-muted">
            {personal.location}
          </p>
          <h1 className="mb-2">{personal.name}</h1>
          <p className="mb-4 text-[clamp(1.1rem,2.5vw,1.4rem)] font-medium text-accent">
            {personal.title}
          </p>
          <p className="mb-4 text-[clamp(1rem,2vw,1.2rem)]">{personal.tagline}</p>
          <p className="mb-8 max-w-[42rem] text-fg-muted">{personal.bio}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className={primaryButton}>
              View my work
            </Link>
            <a href={`mailto:${personal.email}`} className={secondaryButton}>
              Get in touch
            </a>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="hero-photo"
          src={personal.avatar}
          alt={`Portrait of ${personal.name}`}
          width={240}
          height={240}
          className="h-40 w-40 shrink-0 rounded-full border border-border object-cover shadow-lg nav:h-60 nav:w-60"
        />
      </section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 wide:grid-cols-3">
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {latestStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </Section>

      <section
        className="mb-16 rounded-card border border-border bg-bg-elevated px-6 py-12 text-center"
        aria-label="Contact"
      >
        <h2>Let&apos;s work together</h2>
        <p className="mx-auto mb-7 mt-3 max-w-[34rem] text-fg-muted">
          Have a project in mind, or just want to talk shop about AI agents and
          web engineering? My inbox is open.
        </p>
        <a href={`mailto:${personal.email}`} className={primaryButton}>
          {personal.email}
        </a>
      </section>
    </div>
  );
}
