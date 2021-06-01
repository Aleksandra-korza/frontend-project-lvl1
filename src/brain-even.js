import game from './index.js'; // импортируем функцию которая создает игру. в src папке лежат файлы нашей программы.
import getRandomNumb from './getRandomNumb.js';

// отличающаяся часть новой игы. Игра которая использует движок из файла game.js.

const gameEven = () => {
  const getGameData = () => {
    const createQuestions = (length = 3) => {
      const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
      const questions = [];
      for (let i = 0; i < length; i += 1) {
        const q = getRandomNumb(0, 100);
        questions.push(q);
      }
      const correctAnswers = [];
      for (let i = 0; i < questions.length; i += 1) {
        const correctAnswer = questions[i] % 2 === 0 ? 'yes' : 'no';
        correctAnswers.push(correctAnswer);
      }
      return {
        questions,
        correctAnswers,
        rules,
      };
    };
    const { rules, questions, correctAnswers } = createQuestions();
    return {
      questions,
      correctAnswers,
      rules,
    };
  };
  game(getGameData);
};

export default gameEven;
