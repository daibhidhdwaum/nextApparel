import Link from "next/link";

import * as styles from "./navbar.module.css";

const Navbar = ({ isOpen }) => {
  console.log(isOpen);
  return (
    <nav>
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
          <Link href="/">
            <a>Men</a>
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link href="/">
            <a>Women</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
