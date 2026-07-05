import Link from "next/link";
import Tag from "@/components/Tag";
import { formatDate, type Story } from "@/lib/profile";
import styles from "./StoryCard.module.css";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        <time dateTime={story.date} className={styles.date}>
          {formatDate(story.date)}
        </time>
        <h3 className={styles.title}>{story.title}</h3>
        <p className={styles.excerpt}>{story.excerpt}</p>
        <div className={styles.tags}>
          {story.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </article>
    </Link>
  );
}
