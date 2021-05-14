import Link from "next/link";
import Image from "next/image";
// styles
import * as styles from "./card.module.css";

const Card = ({ line }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {line.map((product) => {
          const { id, description, title, variants, images } = product;
          const { src } = images[0];

          return (
            <li key={id} className={styles.card}>
              <Link href={"/"}>
                <div className={styles.cardContainer}>
                  <div>
                    <Image
                      src={`${src}`}
                      width={700}
                      height={400}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.cardCopy}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <div className={styles.price}>
                    {variants.length > 1 ? (
                      <p>Starting at ${variants[0].price}</p>
                    ) : (
                      <p>${variants[0].price}</p>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
