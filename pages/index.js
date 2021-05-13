import Head from "next/head";
import Link from "next/link";
// utils and apis
import { client } from "../utils/shopify";
import { createClientFunc } from "../apis/contentful";
// components
import Hero from "../components/body/hero/Hero";
import FrontPageLineSelection from "../components/body/frontPageLineSelection/FrontPageLineSelection";
// styles
import styles from "../styles/Home.module.css";

export default function Home({ mensStyles, womensStyles, hero }) {
  const limitNumberOfCards = (lineArr) => {
    const lineArrCopy = [...lineArr];
    const cardsToRender = lineArrCopy.slice(0, 2);

    return cardsToRender;
  };

  const womensLine = limitNumberOfCards(womensStyles);
  const mensLine = limitNumberOfCards(mensStyles);

  return (
    <div className={styles.container}>
      <Head>
        <title>nextApparel | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero hero={hero} />
        <FrontPageLineSelection line={womensLine} />
        <FrontPageLineSelection line={mensLine} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const contentfulClient = createClientFunc();

  const products = await client.product.fetchAll();
  const policies = await client.shop.fetchPolicies();
  const res = await contentfulClient.getEntries({ content_type: "hero" });

  const mensStyles = products.filter(
    (product) => product.productType === "men"
  );

  const womensStyles = products.filter(
    (product) => product.productType === "women"
  );

  return {
    props: {
      policies: JSON.parse(JSON.stringify(policies)),
      mensStyles: JSON.parse(JSON.stringify(mensStyles)),
      womensStyles: JSON.parse(JSON.stringify(womensStyles)),
      hero: res.items[0].fields,
    },
  };
};
