import game from './index.js'; // импортируем функцию которая создает игру. в src папке лежат файлы нашей программы.
import getRandomNumb from './getRandomNumb.js';
import DEFAULT_ROUNDS_AMOUNT from './constants.js';

// отличающаяся часть новой игы. Игра которая использует движок из файла game.js.

const brainPrime = () => {
  const getGameData = () => {
    const questions = [];
    const createQuestions = (length = DEFAULT_ROUNDS_AMOUNT) => {
      for (let i = 0; i < length; i += 1) {
        const question = getRandomNumb(0, 100);
        questions.push(question);
      }
    };
    createQuestions();

    const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

    const correctAnswers = [];
    const isPrime = (x) => {
      for (let i = 0; i < x - 1;) {
        if ((x % i === 0) || (x === 0 || x === 1)) {
          return false;
        }
        i += 1;
      }
      return true;
    };

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
  game(getGameData);
};

export default brainPrime;
