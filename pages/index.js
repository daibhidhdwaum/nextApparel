import Head from "next/head";
import Link from "next/link";
// utils and apis
import { client } from "../apis/shopify";
import { createClientFunc } from "../apis/contentful";
import { limitNumberOfCards } from "../utils/limitNumberOfCards";
// components
import Hero from "../components/content/hero/Hero";
import Banner from "../components/content/banner/Banner";
import FrontPageLineSelection from "../components/content/frontPageLineSelection/FrontPageLineSelection";
// styles
import styles from "../styles/Home.module.css";

export default function Home({ mensStyles, womensStyles, hero, banners }) {
  const pageBanner = banners.filter((banner) => banner.fields.tag === "front");
  const bannerToDisplay = pageBanner[0].fields;
  const womensLine = limitNumberOfCards(womensStyles);
  const mensLine = limitNumberOfCards(mensStyles);

  return (
    <div className={styles.container}>
      <Head>
        <title>nextApparel | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Hero hero={hero} />
          <FrontPageLineSelection line={womensLine} />
          <Banner banner={bannerToDisplay} />
          <FrontPageLineSelection line={mensLine} />
        </main>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const contentfulClient = createClientFunc();

  const products = await client.product.fetchAll();
  const policies = await client.shop.fetchPolicies();
  const heroRes = await contentfulClient.getEntries({ content_type: "hero" });
  const bannersRes = await contentfulClient.getEntries({
    content_type: "promoBanner",
  });

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
      hero: heroRes.items[0].fields,
      banners: bannersRes.items,
    },
  };
};
