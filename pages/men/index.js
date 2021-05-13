import Head from "next/head";
import { client } from "../../utils/shopify";

import Card from "../../components/content/card/Card";

const Men = ({ mensStyles }) => {
  return (
    <>
      <Head>
        <title>nextApparel | men</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Card line={mensStyles} />
        </section>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  // const contentfulClient = createClientFunc();

  const products = await client.product.fetchAll();
  const policies = await client.shop.fetchPolicies();

  const mensStyles = products.filter(
    (product) => product.productType === "men"
  );

  return {
    props: {
      policies: JSON.parse(JSON.stringify(policies)),
      mensStyles: JSON.parse(JSON.stringify(mensStyles)),
    },
  };
};

export default Men;
