import startGame from '../index.js';
import DEFAULT_ROUNDS_AMOUNT from '../constants.js';
import getRandomNumb from '../getRandomNumb.js';

const getGameData = (roundsCount = DEFAULT_ROUNDS_AMOUNT) => {
  const correctAnswers = [];
  const rules = 'What number is missing in the progression?';

  const questions = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = [];

    const randomNumb1 = getRandomNumb(0, 10);
    const randomNumb2 = getRandomNumb(0, 10);

    let iteration = randomNumb1 + randomNumb2;

    for (let z = 0; z < 10; z += 1) {
      iteration += randomNumb2;
      question.push(iteration);
    }
    let correctAnswer = '';
    const hideNumber = getRandomNumb(0, 10);
    correctAnswer = String(question[hideNumber]);
    correctAnswers.push(correctAnswer);
    question[hideNumber] = '..';

    questions.push(question.join(' '));
  }
  return {
    questions,
    correctAnswers,
    rules,
  };
};
const startBrainProgression = () => {
  startGame(getGameData);
};
export default startBrainProgression;
