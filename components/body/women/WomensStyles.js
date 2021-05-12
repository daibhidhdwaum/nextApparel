import Link from "next/link";
import Image from "next/image";

const WomensStyles = ({ womensStyles }) => {
  return (
    <ul>
      {womensStyles.map((product) => {
        const { id, description, title, variants, images } = product;
        const { src } = images[0];
        console.log(src);

        return (
          <li key={id}>
            <Link href={"/"}>
              <div>
                <div>
                  <Image src={`${src}`} width={600} height={400} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {variants.length > 1 ? (
                  <p>Starting at ${variants[0].price}</p>
                ) : (
                  <p>${variants[0].price}</p>
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default WomensStyles;
