import startGame from '../index.js'; // импортируем функцию которая создает игру. в src папке лежат файлы нашей программы.
import getRandomNumb from '../getRandomNumb.js';
import DEFAULT_ROUNDS_AMOUNT from '../constants.js';

// отличающаяся часть новой игы. Игра которая использует движок из файла game.js.
const isEven = (x) => (x % 2 === 0);

const getGameData = (length = DEFAULT_ROUNDS_AMOUNT) => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  for (let i = 0; i < length; i += 1) {
    const question = getRandomNumb(0, 100);
    questions.push(question);
  }

  const correctAnswers = [];

  for (let i = 0; i < questions.length; i += 1) {
    if (isEven(questions[i]) === true) {
      correctAnswers.push('yes');
    } else {
      correctAnswers.push('no');
    }
  }

  return {
    questions,
    correctAnswers,
    rules,
  };
};

export const startGameEven = () => {
  startGame(getGameData);
};

export default startGameEven;
