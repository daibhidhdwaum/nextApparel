import { social } from "../../../data/social";
import * as styles from "./social.module.css";

const Social = () => {
  return (
    <ul className={styles.list}>
      {social.map((platform) => {
        const { icon, name, url } = platform;
        return (
          <li key={name}>
            <a href={url}>
              <div className={styles.platform}>{icon()}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
