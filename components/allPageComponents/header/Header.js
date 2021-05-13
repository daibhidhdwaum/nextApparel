import { useState } from "react";
import Logo from "../logo/Logo";
import Hamburger from "../hamburger/Hamburger";
import Navbar from "../navbar/Navbar";
import * as styles from "./header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.logoAndBurger}>
              <Logo />
              <Hamburger onClickHandler={onClickHandler} />
            </div>
            <Navbar isOpen={isOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
