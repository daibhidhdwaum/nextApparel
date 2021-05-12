import Link from "next/link";
import Image from "next/image";
// styles
import * as styles from "../card.module.css";

const MensStyles = ({ mensStyles }) => {
  return (
    <ul>
      {mensStyles.map((product) => {
        const { id, description, title, variants, images } = product;
        const { src } = images[0];
        console.log(src);

        return (
          <li key={id} className={styles.card}>
            <Link href={"/"}>
              <div className={styles.imageCont}>
                <Image src={`${src}`} width={600} height={400} />
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

export default MensStyles;
