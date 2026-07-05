import Tag from "@/components/Tag";
import { formatDateRange, type ExperienceEntry } from "@/lib/profile";

export default function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="relative list-none border-l border-border pb-12 pl-7 last:pb-2 before:absolute before:left-[-5px] before:top-[0.4rem] before:h-[9px] before:w-[9px] before:rounded-full before:bg-accent before:content-['']">
      <div className="mb-[0.35rem] flex flex-wrap items-baseline gap-3">
        <time className="font-mono text-[0.8rem] text-fg-muted">
          {formatDateRange(entry.start, entry.end)}
        </time>
        <span className="text-[0.8rem] text-fg-muted">{entry.location}</span>
      </div>
      <h3 className="text-[1.15rem]">{entry.role}</h3>
      <p className="mb-2 text-[0.95rem] text-accent">{entry.company}</p>
      <p className="mb-3 text-[0.95rem] text-fg-muted">{entry.summary}</p>
      <ul className="mb-4 flex flex-col gap-[0.4rem] pl-5 text-[0.95rem]">
        {entry.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-[0.4rem]">
        {entry.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </li>
  );
}
