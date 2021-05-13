import Head from "next/head";
import { client } from "../../utils/shopify";

import Card from "../../components/body/Card";

const Women = ({ womensStyles }) => {
  return (
    <>
      <Head>
        <title>nextApparel | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Card line={womensStyles} />
        </section>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  // const contentfulClient = createClientFunc();

  const products = await client.product.fetchAll();
  const policies = await client.shop.fetchPolicies();
  // const res = await contentfulClient.getEntries({ content_type: "hero" });

  const womensStyles = products.filter(
    (product) => product.productType === "women"
  );
  return {
    props: {
      policies: JSON.parse(JSON.stringify(policies)),
      womensStyles: JSON.parse(JSON.stringify(womensStyles)),
    },
  };
};

export default Women;
