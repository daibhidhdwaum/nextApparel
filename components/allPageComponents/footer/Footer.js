import * as styles from "./footer.module.css";

import Social from "../../content/social/Social";

const Footer = ({ policies }) => {
  let policiesArray = [];

  for (const policy in policies) {
    policiesArray = [...policiesArray, policies[policy]];
  }

  const policiesToDisplay = policiesArray.filter((policy) => !policy.name);

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ul className={styles.policies}>
            {policiesToDisplay.map((policy) => {
              const { title } = policy;
              return (
                <li className={styles.policy}>
                  <p>{title}</p>
                </li>
              );
            })}
          </ul>
          <Social className={styles.social} />
        </div>
        <small className={styles.copy}>copyright © 2021</small>
      </div>
    </footer>
  );
};

export default Footer;
