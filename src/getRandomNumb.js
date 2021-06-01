const getRandomNumb = (x, y) => {
  const getGameData = () => {
    const e = Math.trunc(Math.random() * y);
    const z = Math.max(x, e);
    return z;
  };
  getGameData();
};
export default getRandomNumb;
