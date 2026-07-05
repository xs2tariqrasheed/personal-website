import Link from "next/link";

interface SectionProps {
  id: string;
  title: string;
  viewAll?: { href: string; label: string };
  children: React.ReactNode;
}

export default function Section({ id, title, viewAll, children }: SectionProps) {
  return (
    <section aria-labelledby={`${id}-heading`} className="mb-18">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 id={`${id}-heading`}>{title}</h2>
        {viewAll && (
          <Link
            href={viewAll.href}
            className="whitespace-nowrap text-[0.9rem] text-accent hover:underline"
          >
            {viewAll.label} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
