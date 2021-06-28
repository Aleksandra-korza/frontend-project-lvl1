import startGame from '../index.js';
import getRandomNumb from '../getRandomNumb.js';

const brainProgression = () => {
  const getGameData = () => {
    // let correctAnswer = '';
    const correctAnswers = [];
    const rules = 'What number is missing in the progression?';

    const createQuestions = (length = 10) => {
      // const rules = 'What number is missing in the progression?';
      const questions = [];
      for (let i = 0; i < 3; i += 1) {
        const question = [];

        const randomNumb1 = getRandomNumb(0, 10);
        const randomNumb2 = getRandomNumb(0, 10);

        let iteration = randomNumb1 + randomNumb2;

        for (let z = 0; z < length; z += 1) {
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
      };
    };
    const { questions } = createQuestions();
    return {
      questions,
      correctAnswers,
      rules,
    };
  };
  startGame(getGameData);
};
export default brainProgression;
