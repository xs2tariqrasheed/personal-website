import Tag from "@/components/Tag";
import { formatDateRange, type ExperienceEntry } from "@/lib/profile";
import styles from "./ExperienceItem.module.css";

export default function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className={styles.item}>
      <div className={styles.meta}>
        <time className={styles.range}>
          {formatDateRange(entry.start, entry.end)}
        </time>
        <span className={styles.location}>{entry.location}</span>
      </div>
      <h3 className={styles.role}>{entry.role}</h3>
      <p className={styles.company}>{entry.company}</p>
      <p className={styles.summary}>{entry.summary}</p>
      <ul className={styles.highlights}>
        {entry.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className={styles.tags}>
        {entry.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </li>
  );
}
