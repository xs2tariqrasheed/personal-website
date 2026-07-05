"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const heroPhotoRef = useRef<HTMLDivElement>(null);
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const el = heroPhotoRef.current;
    if (!el) return;

    // Show the header avatar once the hero photo scrolls up behind the
    // sticky header. The negative top rootMargin accounts for the header
    // height so the swap happens as the photo disappears under it.
    const observer = new IntersectionObserver(
      ([entry]) => setShowAvatar(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>Tariq Rasheed</span>
        <div
          className={`${styles.headerAvatar} ${
            showAvatar ? styles.headerAvatarVisible : ""
          }`}
          aria-hidden={!showAvatar}
        >
          <Image
            src="/profile.svg"
            alt="Tariq Rasheed"
            width={40}
            height={40}
          />
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroPhoto} ref={heroPhotoRef}>
            <Image
              src="/profile.svg"
              alt="Tariq Rasheed"
              width={180}
              height={180}
              priority
            />
          </div>
          <div className={styles.heroIntro}>
            <h1>Hi, I&apos;m Tariq Rasheed.</h1>
            <p>
              I build thoughtful software for the web. Welcome to my corner of
              the internet.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
