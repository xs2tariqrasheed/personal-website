"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/lib/profile";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/stories", label: "Stories" },
];

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-header backdrop-blur-md">
      <div className="container relative flex h-15 items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-[-0.01em] hover:text-accent"
        >
          {profile.personal.name}
        </Link>

        <div className="flex items-center gap-2 nav:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="block cursor-pointer p-2"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`relative block h-0.5 w-5 rounded-[2px] bg-fg transition-all before:absolute before:-top-1.5 before:left-0 before:block before:h-0.5 before:w-5 before:rounded-[2px] before:bg-fg before:transition-transform before:content-[''] after:absolute after:left-0 after:top-1.5 after:block after:h-0.5 after:w-5 after:rounded-[2px] after:bg-fg after:transition-transform after:content-[''] ${
                open
                  ? "bg-transparent before:translate-y-1.5 before:rotate-45 after:-translate-y-1.5 after:-rotate-45"
                  : ""
              }`}
            />
          </button>
        </div>

        <nav
          id="site-nav"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col items-stretch gap-1 border-b border-border bg-bg-elevated px-5 pb-4 pt-3 nav:static nav:flex nav:flex-row nav:items-center nav:gap-1 nav:border-0 nav:bg-transparent nav:p-0`}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-[0.6rem] text-base text-fg-muted transition-colors hover:bg-bg-elevated hover:text-fg aria-[current=page]:bg-accent-soft aria-[current=page]:text-fg nav:py-[0.35rem] nav:text-[0.9rem]"
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden nav:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
