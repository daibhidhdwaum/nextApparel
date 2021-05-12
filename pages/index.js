import Head from "next/head";
import Link from "next/link";
// utils and apis
import { client } from "../utils/shopify";
import { createClientFunc } from "../apis/contentful";
// components
import Hero from "../components/body/hero/Hero";
import WomensStyles from "../components/body/women/WomensStyles";
import MensStyles from "../components/body/men/MensStyles";
// styles
import styles from "../styles/Home.module.css";

export default function Home({ products, hero }) {
  console.log(products);

  const mensStyles = products.filter(
    (product) => product.productType === "men"
  );

  const womensStyles = products.filter(
    (product) => product.productType === "women"
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>nextApparel | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero hero={hero} />
        <WomensStyles womensStyles={womensStyles} />
        <MensStyles mensStyles={mensStyles} />
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
