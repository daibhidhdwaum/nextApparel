import Footer from "../footer/Footer";
import Header from "../header/Header";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
