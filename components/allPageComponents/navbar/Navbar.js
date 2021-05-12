import Link from "next/link";

import * as styles from "./navbar.module.css";

const Navbar = ({ isOpen }) => {
  return (
    <nav className={styles.nav}>
      <ul
        className={`${styles.menuLinks} ${
          isOpen ? styles.isOpen : styles.isClosed
        } `}
      >
        <li className={styles.menuLink}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="/men">
            <a>Men</a>
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="/women">
            <a>Women</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
