import Head from "next/head";
import styles from "../styles/Home.module.css";
import { client } from "../utils/shopify";

export default function Home({ products }) {
  console.log(products);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Apparel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Products in console</main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await client.product.fetchAll();
  const policies = await client.shop.fetchPolicies();

  return {
    props: {
      policies: JSON.parse(JSON.stringify(policies)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};
