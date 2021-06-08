const getRandomNumb = (x, y) => {
  const e = Math.trunc(Math.random() * y);
  const z = Math.max(x, e);
  return z;
};
export default getRandomNumb;
