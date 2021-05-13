import Footer from "../footer/Footer";
import Header from "../header/Header";
import * as styles from "./layout.module.css";

const Layout = ({ children, policies }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer policies={policies} />
    </div>
  );
};

export default Layout;
