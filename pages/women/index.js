import Head from "next/head";
import { client } from "../../utils/shopify";
import { createClientFunc } from "../../apis/contentful";
import Card from "../../components/content/card/Card";
import * as styles from "../../styles/Women.module.css";

const Women = ({ womensStyles, banners }) => {
  const pageBanner = banners.filter((banner) => banner.fields.tag === "women");
  const bannerToDisplay = pageBanner[0].fields;

  const {
    headline,
    secondaryText,
    image: {
      fields: {
        file: { url },
      },
    },
  } = bannerToDisplay;

  return (
    <>
      <Head>
        <title>nextApparel | women</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section
          style={{ backgroundImage: `url(${url})` }}
          className={styles.banner}
        >
          <div className={styles.wrapper}>
            <div>
              <h3 className={styles.secondaryText}>{headline}</h3>
            </div>
            <div>
              <p>{secondaryText}</p>
            </div>
          </div>
        </section>
        <section>
          <Card line={womensStyles} />
        </section>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const contentfulClient = createClientFunc();

  const products = await client.product.fetchAll();
  const policies = await client.shop.fetchPolicies();
  const res = await contentfulClient.getEntries({
    content_type: "promoBanner",
  });

  const womensStyles = products.filter(
    (product) => product.productType === "women"
  );

  return {
    props: {
      policies: JSON.parse(JSON.stringify(policies)),
      womensStyles: JSON.parse(JSON.stringify(womensStyles)),
      banners: res.items,
    },
  };
};

export default Women;
