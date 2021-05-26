import readlineSync from 'readline-sync';

const name = readlineSync.question('Your answer: ');

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line no-use-before-define
  console.log(`May I have your name? ${name}`);
  // eslint-disable-next-line no-use-before-define
  console.log(`Hello!${name}`);
};
export default brainGames;
