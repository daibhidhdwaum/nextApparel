import { HiMenuAlt4 } from "react-icons/hi";

import * as styles from "./hamburger.module.css";

const Hamburger = ({ onClickHandler }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => onClickHandler()}>
        <HiMenuAlt4 className={styles.bars} />
      </button>
    </div>
  );
};

export default Hamburger;
