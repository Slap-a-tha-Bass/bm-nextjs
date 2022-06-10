import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/red">red</Link>

      <Link href="/orange">orange</Link>

      <Link href="/yellow">yellow</Link>

      <Link href="/green">green</Link>

      <Link href="/blue">blue</Link>

      <Link href="/purple">purple</Link>

      <Link href="/pink">pink</Link>

      <Link href="/white">white</Link>

      <Link href="/black">black</Link>

      <Link href="/brown">brown</Link>

      <Link href="/gray">gray</Link>

      <Link href="/neutral">neutral</Link>
    </nav>
  );
}
