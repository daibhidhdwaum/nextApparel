import Head from "next/head";
import { client } from "../../utils/shopify";
import { createClientFunc } from "../../apis/contentful";
import Card from "../../components/content/card/Card";
import * as styles from "../../styles/Men.module.css";
const Men = ({ mensStyles, banners }) => {
  console.log(mensStyles);

  const pageBanner = banners.filter((banner) => banner.fields.tag === "men");
  console.log(pageBanner);
  const bannerToDisplay = pageBanner[0].fields;
  console.log(bannerToDisplay);

  const {
    headline,
    image: {
      fields: {
        file: { url },
      },
    },
  } = bannerToDisplay;

  return (
    <>
      <Head>
        <title>nextApparel | men</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section
          style={{ backgroundImage: `url(${url})` }}
          className={styles.banner}
        >
          <div className={styles.wrapper}>
            <h3>{headline}</h3>
          </div>
        </section>
        <section>
          <Card line={mensStyles} />
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

  const mensStyles = products.filter(
    (product) => product.productType === "men"
  );

  return {
    props: {
      policies: JSON.parse(JSON.stringify(policies)),
      mensStyles: JSON.parse(JSON.stringify(mensStyles)),
      banners: res.items,
    },
  };
};

export default Men;
