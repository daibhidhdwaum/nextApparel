import Image from "next/image";

const Hero = ({ hero }) => {
  const {
    heroImage: {
      fields: { file },
    },
    heroHeadline,
    secondaryText,
  } = hero;

  const {
    url,
    details: {
      image: { width, height },
    },
  } = file;

  // ! Image and width and url are required to display image
  // ! Image domain must be added to next.config.js domains array for image to display

  return (
    <div>
      <Image src={`https:${url}`} width={width} height={height} />
      <h2>{heroHeadline}</h2>
      <p>{secondaryText}</p>
    </div>
  );
};

export default Hero;
