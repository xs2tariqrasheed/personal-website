import type { Metadata } from "next";
import ExperienceItem from "@/components/ExperienceItem";
import SkillGroup from "@/components/SkillGroup";
import { profile } from "@/lib/profile";

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
      <header className="pb-10 pt-14">
        <h1>Experience</h1>
        <p className="mt-3 max-w-[40rem] text-fg-muted">
          Where I&apos;ve worked and what I&apos;ve shipped along the way.
        </p>
      </header>

      <ol className="mb-16 pl-1">
        {profile.experience.map((entry) => (
          <ExperienceItem key={`${entry.company}-${entry.start}`} entry={entry} />
        ))}
      </ol>

      <section aria-labelledby="skills-heading" className="mb-12">
        <h2 id="skills-heading">Skills</h2>
        <div className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-2">
          {profile.skills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}
