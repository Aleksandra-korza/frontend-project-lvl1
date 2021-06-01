import readlineSync from 'readline-sync';

const brainGames = () => {
  const getGameData = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
  };
  // eslint-disable-next-line no-undef
  getGameData();
};

export default brainGames;
