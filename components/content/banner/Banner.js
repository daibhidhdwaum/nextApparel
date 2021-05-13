import Image from "next/image";
import * as styles from "../banner/banner.module.css";
const Hero = ({ banner }) => {
  const {
    headline,
    image: {
      fields: {
        file: { url },
      },
    },
    secondaryText,
  } = banner;

  // ! Image and width and url are required to display image
  // ! Image domain must be added to next.config.js domains array for image to display

  return (
    <div className={styles.banner}>
      <div>
        <div>
          <div className={styles.imageContainer}>
            <Image src={`https:${url}`} width={1100} height={500} />
          </div>
          <div className={styles.text}>
            <h2>{headline}</h2>
            <p>{secondaryText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
