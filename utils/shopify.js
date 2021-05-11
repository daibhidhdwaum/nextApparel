import Client from "shopify-buy";

export const client = Client.buildClient({
  domain: "next-js-apparel.myshopify.com",
  storefrontAccessToken: "e2fb77e48507c8e395026e574bef41ba",
});
