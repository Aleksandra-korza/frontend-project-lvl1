import game from './index.js';
import getRandomNumb from './getRandomNumb.js';

const gameGcd = () => {
  const getGameData = () => {
    const questions = [];
    const createQuestions = (length = 3) => {
      let operations = '';
      for (let i = 0; i < length; i += 1) {
        const q = getRandomNumb(1, 100);
        const a = getRandomNumb(1, 100);
        operations = (`${q} ${a}`);
        questions.push(operations);
      }
    };
    createQuestions();

    // eslint-disable-next-line consistent-return
    const GCD = (numb) => {
      const splits = numb.split(' ');
      const numbMax = Math.max(Number(splits[0]), Number(splits[1]));
      const numbMin = Math.min(Number(splits[0]), Number(splits[1]));
      if ((numbMax / numbMin) % 2 === 0) {
        return numbMin;
      }
      for (let i = numbMin - 1; i > 0; i -= 1) {
        if ((numbMin % i === 0) && (numbMax % i === 0)) {
          return i;
        }
      }
    };

    const correctAnswers = [];

    for (let i = 0; i < questions.length; i += 1) {
      correctAnswers.push(String(GCD(questions[i])));
    }

    const rules = 'What is the result of the expression?';
    return {
      questions,
      correctAnswers,
      rules,
    };
  };
  game(getGameData);
};

export default gameGcd;
