import game from './index.js';
import getRandomNumb from './getRandomNumb.js';

const gameCalc = () => {
  const getGameData = (length = 3) => {
    const rules = 'What is the result of the expression?';
    const questions = [];
    const correctAnswers = [];
    const operationNames = ['+', '-', '*'];
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
    };

    for (let i = 0; i < length; i += 1) {
      const q = getRandomNumb(0, 100);
      const w = operationNames[getRandomNumb(0, operationNames.length)];
      const a = getRandomNumb(0, 100);
      const p = operations[w](q, a);
      correctAnswers.push(String(p));
      questions.push(`${q} ${w} ${a}`);
    }
    return {
      questions,
      correctAnswers,
      rules,
    };
  };
  game(getGameData);
};

export default gameCalc;
