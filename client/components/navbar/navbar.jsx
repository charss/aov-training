import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.nav + " py-5 px-10"}>
      <ul className={styles.navlink}>
        <li className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == "/books" ? styles.active : ""}>
          <Link href="/books">Books</Link>
        </li>
        <li className={router.pathname == "/about" ? styles.active : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname == "/contact" ? styles.active : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
