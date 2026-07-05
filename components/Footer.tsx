import { profile } from "@/lib/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  const { personal } = profile;
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <div className={styles.links}>
          {personal.socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="me noopener"
              className={styles.link}
            >
              {social.label}
            </a>
          ))}
          <a href={`mailto:${personal.email}`} className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
