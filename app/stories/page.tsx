import type { Metadata } from "next";
import StoryCard from "@/components/StoryCard";
import { getStories, profile } from "@/lib/profile";

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
      <header className="pb-10 pt-14">
        <h1>Stories</h1>
        <p className="mt-3 max-w-[40rem] text-fg-muted">
          Lessons and war stories from building software — the things I wish
          someone had told me earlier.
        </p>
      </header>
      <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {getStories().map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </div>
  );
}
