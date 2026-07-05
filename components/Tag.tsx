export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block whitespace-nowrap rounded-full border border-border bg-bg-elevated px-[0.65rem] py-[0.15rem] font-mono text-xs text-fg-muted">
      {children}
    </span>
  );
}
