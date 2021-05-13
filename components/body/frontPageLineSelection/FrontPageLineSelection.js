import Link from "next/link";
import Card from "../Card";

const FrontPageLineSelection = ({ line }) => {
  const { productType } = line;
  return (
    <section>
      <Card line={line} />
      <Link href={`/${productType}`}>
        <p>shop {productType}</p>
      </Link>
    </section>
  );
};

export default FrontPageLineSelection;
