import game from './index.js';
import getRandomNumb from './getRandomNumb.js';

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

        const q = getRandomNumb(0, 10);
        const a = getRandomNumb(0, 10);

        let x = q + a;

        for (let z = 0; z < length; z += 1) {
          x += a;
          question.push(x);
        }
        let correctAnswer = '';
        const u = getRandomNumb(0, 10);
        correctAnswer = String(question[u]);
        correctAnswers.push(correctAnswer);
        question[u] = '..';

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
  game(getGameData);
};
export default brainProgression;
