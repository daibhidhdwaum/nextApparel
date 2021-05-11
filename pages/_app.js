import Layout from "../components/allPageComponents/layout/Layout";
import "../styles/globals.css";
import "normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
