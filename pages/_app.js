import Layout from "../components/allPageComponents/layout/Layout";
import "../styles/globals.css";
import "normalize.css";

function MyApp({ Component, pageProps }) {
  const { policies } = pageProps;
  return (
    <Layout policies={policies}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
