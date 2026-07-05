import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Tag from "@/components/Tag";
import { articleJsonLd } from "@/lib/jsonld";
import { formatDate, getStoryBySlug, profile } from "@/lib/profile";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return profile.stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) {
    return {};
  }
  return {
    title: story.title,
    description: story.excerpt,
    alternates: {
      canonical: `/stories/${story.slug}`,
    },
    openGraph: {
      type: "article",
      title: story.title,
      description: story.excerpt,
      url: `/stories/${story.slug}`,
      publishedTime: story.date,
      authors: [profile.personal.name],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) {
    notFound();
  }

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(story)) }}
      />
      <article className="mx-auto max-w-[44rem] pb-12 pt-14">
        <header className="mb-10">
          <Link
            href="/stories"
            className="mb-6 inline-block text-[0.9rem] text-fg-muted transition-colors hover:text-accent"
          >
            ← All stories
          </Link>
          <h1 className="mb-4 text-[clamp(1.75rem,4vw,2.5rem)]">{story.title}</h1>
          <div className="flex flex-wrap items-center gap-4">
            <time
              dateTime={story.date}
              className="font-mono text-[0.85rem] text-fg-muted"
            >
              {formatDate(story.date)}
            </time>
            <div className="flex flex-wrap gap-[0.4rem]">
              {story.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-5 text-[1.05rem] leading-[1.75]">
          {story.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
