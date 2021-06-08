import game from '../index.js'; // импортируем функцию которая создает игру. в src папке лежат файлы нашей программы.
import getRandomNumb from '../getRandomNumb.js';
import DEFAULT_ROUNDS_AMOUNT from '../constants.js';

// отличающаяся часть новой игы. Игра которая использует движок из файла game.js.

const gameEven = () => {
  const getGameData = () => {
    const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
    const questions = [];
    const createQuestions = (length = DEFAULT_ROUNDS_AMOUNT) => {
      for (let i = 0; i < length; i += 1) {
        const q = getRandomNumb(0, 100);
        questions.push(q);
      }
    };
    createQuestions();
    const correctAnswers = [];

    const isEven = (x) => (x % 2 === 0);

    for (let i = 0; i < questions.length; i += 1) {
      if (isEven(questions[i]) === true) {
        correctAnswers.push('yes');
      } else {
      correctAnswers.push('no');
    }

    return {
      questions,
      correctAnswers,
      rules,
    };
  };
  game(getGameData);
};

export default gameEven;
