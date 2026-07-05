import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <p className="mb-2 font-mono text-[0.9rem] text-accent">404</p>
      <h1 className="mb-3">Page not found</h1>
      <p className="mb-8 text-fg-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="text-accent hover:underline">
        ← Back home
      </Link>
    </div>
  );
}
