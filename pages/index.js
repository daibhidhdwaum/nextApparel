import Head from "next/head";
import styles from "../styles/Home.module.css";
import { client } from "../utils/shopify";
import { createClientFunc } from "../apis/contentful";

import Hero from "../components/body/hero/Hero";

export default function Home({ products, hero }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Apparel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero hero={hero} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const contentfulClient = createClientFunc();

  const products = await client.product.fetchAll();
  const policies = await client.shop.fetchPolicies();
  const res = await contentfulClient.getEntries({ content_type: "hero" });

  return {
    props: {
      policies: JSON.parse(JSON.stringify(policies)),
      products: JSON.parse(JSON.stringify(products)),
      hero: res.items[0].fields,
    },
  };
};
