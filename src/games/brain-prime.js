import startGame from '../index.js'; // импортируем функцию которая создает игру. в src папке лежат файлы нашей программы.
import getRandomNumb from '../getRandomNumb.js';
import DEFAULT_ROUNDS_AMOUNT from '../constants.js';

// отличающаяся часть новой игы. Игра которая использует движок из файла game.js.

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i < x - 1; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = (length = DEFAULT_ROUNDS_AMOUNT) => {
  const questions = [];
  for (let i = 0; i < length; i += 1) {
    const question = getRandomNumb(0, 100);
    questions.push(question);
  }

  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const correctAnswers = [];

  for (let i = 0; i < questions.length; i += 1) {
    const x = questions[i];
    if (isPrime(x) === false) {
      correctAnswers.push('no');
    } else {
      correctAnswers.push('yes');
    }
  }
  return {
    questions,
    correctAnswers,
    rules,
  };
};

const startBrainPrime = () => {
  startGame(getGameData);
};

export default startBrainPrime;
