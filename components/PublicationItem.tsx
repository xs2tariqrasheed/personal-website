import { formatDate, type Publication } from "@/lib/profile";

export default function PublicationItem({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-card border border-border bg-bg-elevated p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent sm:flex-row sm:items-start sm:justify-between sm:gap-6"
    >
      <div className="min-w-0 flex-1">
        <h3 className="flex items-start gap-1.5 text-[1.05rem] group-hover:text-accent">
          <span>{publication.title}</span>
          {/* External-link icon: hidden until hover/focus signals a new tab. */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="mt-1 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
          </svg>
        </h3>
        <p className="mt-1.5 text-[0.95rem] text-fg-muted">
          {publication.description}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end sm:gap-1.5">
        <span className="inline-block whitespace-nowrap rounded-full border border-border bg-bg px-[0.65rem] py-[0.15rem] font-mono text-xs text-fg-muted">
          {publication.platform}
        </span>
        <time
          dateTime={publication.date}
          className="font-mono text-[0.8rem] text-fg-muted"
        >
          {formatDate(publication.date)}
        </time>
      </div>
    </a>
  );
}
