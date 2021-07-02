import startGame from '../index.js';
import DEFAULT_ROUNDS_AMOUNT from '../constants.js';
import getRandomNumb from '../getRandomNumb.js';

const getGameData = (length = DEFAULT_ROUNDS_AMOUNT) => {
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
    const randomNumb1 = getRandomNumb(0, 100);
    const operation = operationNames[getRandomNumb(0, operationNames.length)];
    const randomNumb2 = getRandomNumb(0, 100);
    const answer = operations[operation](randomNumb1, randomNumb2);
    correctAnswers.push(String(answer));
    questions.push(`${randomNumb1} ${operation} ${randomNumb2}`);
  }
  return {
    questions,
    correctAnswers,
    rules,
  };
};

const startGameCalc = () => {
  startGame(getGameData);
};

export default startGameCalc;
