import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <div>
      <p>Product: {title}</p>
    </div>
  );
};

export default Product;
