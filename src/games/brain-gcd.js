import startGame from '../index.js';
import getRandomNumb from '../getRandomNumb.js';
import DEFAULT_ROUNDS_AMOUNT from '../constants.js';

const GCD = (numbMax, numbMin) => {
  if ((numbMax % numbMin === 0)) {
    return numbMin;
  }
  for (let i = numbMin - 1; i > 0; i -= 1) {
    if ((numbMin % i === 0) && (numbMax % i === 0)) {
      return i;
    }
  }
  return 0;
};

const getGameData = (length = DEFAULT_ROUNDS_AMOUNT) => {
  const questions = [];
  const correctAnswers = [];

  let operation = '';
  for (let i = 0; i < length; i += 1) {
    const randomNumb1 = getRandomNumb(1, 100);
    const randomNumb2 = getRandomNumb(1, 100);
    operation = (`${randomNumb1} ${randomNumb2}`);
    questions.push(operation);
    const numbMax = Math.max(Number(randomNumb1), Number(randomNumb2));
    const numbMin = Math.min(Number(randomNumb1), Number(randomNumb2));
    correctAnswers.push(String(GCD(numbMax, numbMin)));
  }

  const rules = 'What is the result of the expression?';
  return {
    questions,
    correctAnswers,
    rules,
  };
};

const startGameGcd = () => {
  startGame(getGameData);
};

export default startGameGcd;
