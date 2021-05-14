export const limitNumberOfCards = (lineArr) => {
  const lineArrCopy = [...lineArr];
  const cardsToRender = lineArrCopy.slice(0, 2);

  return cardsToRender;
};
