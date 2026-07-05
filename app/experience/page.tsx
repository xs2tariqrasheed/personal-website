import type { Metadata } from "next";
import ExperienceItem from "@/components/ExperienceItem";
import SkillGroup from "@/components/SkillGroup";
import { profile } from "@/lib/profile";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience and skills of ${profile.personal.name} — fullstack and AI engineering roles.`,
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div className="container">
      <header className={styles.pageHeader}>
        <h1>Experience</h1>
        <p className={styles.pageIntro}>
          Where I&apos;ve worked and what I&apos;ve shipped along the way.
        </p>
      </header>

      <ol className={styles.timeline}>
        {profile.experience.map((entry) => (
          <ExperienceItem key={`${entry.company}-${entry.start}`} entry={entry} />
        ))}
      </ol>

      <section aria-labelledby="skills-heading" className={styles.skills}>
        <h2 id="skills-heading">Skills</h2>
        <div className={styles.skillsGrid}>
          {profile.skills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}
