import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { productHandle } = router.query;
  console.log(productHandle);
  return <div>{/* <p>Product: {title}</p> */}</div>;
};

export default Product;
