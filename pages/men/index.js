import Head from "next/head";
import { client } from "../../utils/shopify";

import Card from "../../components/body/Card";

const Women = ({ mensStyles }) => {
  return (
    <>
      <Head>
        <title>nextApparel | home</title>
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
  // const res = await contentfulClient.getEntries({ content_type: "hero" });

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

export default Women;
