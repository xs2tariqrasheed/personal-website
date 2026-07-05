import { ThemeToggle } from "./theme-toggle";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.brand}>Tariq Rasheed</span>
      <ThemeToggle />
    </header>
  );
}
