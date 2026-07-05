import type { Metadata } from "next";
import StoryCard from "@/components/StoryCard";
import { getStories, profile } from "@/lib/profile";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Stories",
  description: `Professional stories and lessons learned by ${profile.personal.name} — AI engineering, web development, and career retrospectives.`,
  alternates: {
    canonical: "/stories",
  },
};

export default function StoriesPage() {
  return (
    <div className="container">
      <header className={styles.pageHeader}>
        <h1>Stories</h1>
        <p className={styles.pageIntro}>
          Lessons and war stories from building software — the things I wish
          someone had told me earlier.
        </p>
      </header>
      <div className={styles.grid}>
        {getStories().map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </div>
  );
}
