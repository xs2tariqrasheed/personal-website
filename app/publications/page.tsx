import type { Metadata } from "next";
import PublicationItem from "@/components/PublicationItem";
import { getPublicationsByYear, profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Publications",
  description: `Articles, posts, and publications by ${profile.personal.name} across LinkedIn, Medium, and other platforms.`,
  alternates: {
    canonical: "/publications",
  },
};

export default function PublicationsPage() {
  const groups = getPublicationsByYear();

  return (
    <div className="container">
      <header className="pb-10 pt-14">
        <h1>Publications</h1>
        <p className="mt-3 max-w-[40rem] text-fg-muted">
          Articles, posts, and talks I&apos;ve published across the web. Each
          one opens on the platform it was published on.
        </p>
      </header>

      <div className="mb-16 flex flex-col gap-12">
        {groups.map((group) => (
          <section key={group.year} aria-labelledby={`year-${group.year}`}>
            <h2
              id={`year-${group.year}`}
              className="mb-5 flex items-baseline gap-3 text-[1.35rem]"
            >
              {group.year}
              <span className="font-mono text-[0.8rem] font-normal text-fg-muted">
                {group.items.length}{" "}
                {group.items.length === 1 ? "post" : "posts"}
              </span>
            </h2>
            <div className="flex flex-col gap-4">
              {group.items.map((publication) => (
                <PublicationItem
                  key={publication.url + publication.date}
                  publication={publication}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
