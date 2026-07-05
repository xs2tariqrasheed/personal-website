import Link from "next/link";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  title: string;
  viewAll?: { href: string; label: string };
  children: React.ReactNode;
}

export default function Section({ id, title, viewAll, children }: SectionProps) {
  return (
    <section aria-labelledby={`${id}-heading`} className={styles.section}>
      <div className={styles.header}>
        <h2 id={`${id}-heading`}>{title}</h2>
        {viewAll && (
          <Link href={viewAll.href} className={styles.viewAll}>
            {viewAll.label} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
