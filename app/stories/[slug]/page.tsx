import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Tag from "@/components/Tag";
import { articleJsonLd } from "@/lib/jsonld";
import { formatDate, getStoryBySlug, profile } from "@/lib/profile";
import styles from "./page.module.css";

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
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/stories" className={styles.backLink}>
            ← All stories
          </Link>
          <h1 className={styles.title}>{story.title}</h1>
          <div className={styles.meta}>
            <time dateTime={story.date}>{formatDate(story.date)}</time>
            <div className={styles.tags}>
              {story.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </header>
        <div className={styles.body}>
          {story.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
