import Head from "next/head";
import { client } from "../../utils/shopify";

import Card from "../../components/content/card/Card";

const Women = ({ womensStyles }) => {
  return (
    <>
      <Head>
        <title>nextApparel | women</title>
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
  const contentfulClient = createClientFunc();

  const products = await client.product.fetchAll();
  const policies = await client.shop.fetchPolicies();

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
