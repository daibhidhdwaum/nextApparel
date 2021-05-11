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
        <Logo />
        <Hamburger onClickHandler={onClickHandler} />
      </div>
      <Navbar isOpen={isOpen} />
    </header>
  );
};

export default Header;
