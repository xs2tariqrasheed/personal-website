import Link from "next/link";
import Tag from "@/components/Tag";
import { formatDate, type Story } from "@/lib/profile";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`} className="group block">
      <article className="flex h-full flex-col gap-2 rounded-card border border-border bg-bg-elevated p-6 transition-[border-color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:border-accent">
        <time dateTime={story.date} className="font-mono text-[0.8rem] text-fg-muted">
          {formatDate(story.date)}
        </time>
        <h3 className="text-[1.1rem] group-hover:text-accent">{story.title}</h3>
        <p className="flex-1 text-[0.95rem] text-fg-muted">{story.excerpt}</p>
        <div className="mt-1 flex flex-wrap gap-[0.4rem]">
          {story.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </article>
    </Link>
  );
}
