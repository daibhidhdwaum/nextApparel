import Link from "next/link";
import Card from "../card/Card";
import * as styles from "./frontPageLineSelection.module.css";

const FrontPageLineSelection = ({ line }) => {
  const { productType } = line[0];

  return (
    <section>
      <Card line={line} />
      <Link href={`/${productType}`} className={styles.link}>
        <p className={styles.link}>shop {productType}</p>
      </Link>
    </section>
  );
};

export default FrontPageLineSelection;
