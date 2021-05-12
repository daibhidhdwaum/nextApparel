import Image from "next/image";
import * as styles from "./hero.module.css";

const Hero = ({ hero }) => {
  const {
    heroImage: {
      fields: { file },
    },
    heroHeadline,
    secondaryText,
  } = hero;

  const {
    url,
    details: {
      image: { width, height },
    },
  } = file;

  // ! Image and width and url are required to display image
  // ! Image domain must be added to next.config.js domains array for image to display

  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={`https:${url}`}
            width={1100}
            height={500}
            // layout="fill"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.text}>
          <h2>{heroHeadline}</h2>
          <p>{secondaryText}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
