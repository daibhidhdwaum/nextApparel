import Link from "next/link";
import Image from "next/image";
// styles
import * as styles from "./card.module.css";

const WomensStyles = ({ line }) => {
  return (
    <ul className={styles.list}>
      {line.map((product) => {
        const { id, description, title, variants, images } = product;
        const { src } = images[0];

        return (
          <li key={id} className={styles.card}>
            <Link href={"/"}>
              <div>
                <Image
                  src={`${src}`}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.productDetails}>
                  <h3>{title}</h3>
                  <p>{description}</p>
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
  );
};

export default WomensStyles;
