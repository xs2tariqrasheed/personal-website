import { profile } from "@/lib/profile";

export default function Footer() {
  const { personal } = profile;
  return (
    <footer className="mt-16 border-t border-border">
      <div className="container flex flex-wrap items-center justify-between gap-3 py-6">
        <p className="text-[0.85rem] text-fg-muted">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <div className="flex flex-wrap gap-5">
          {personal.socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="me noopener"
              className="text-[0.85rem] text-fg-muted transition-colors hover:text-fg"
            >
              {social.label}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="text-[0.85rem] text-fg-muted transition-colors hover:text-fg"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
