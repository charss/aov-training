import styles from "./layout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navlink}>
        <li>
          <Link className={router.pathname == "/" ? "active" : ""} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={router.pathname == "/contact" ? "active" : ""}
            href="contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={router.pathname == "/about" ? "active" : ""}
            href="about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
