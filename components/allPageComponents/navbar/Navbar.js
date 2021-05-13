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
            <p>Home</p>
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="/men">
            <p>Men</p>
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="/women">
            <p>Women</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
