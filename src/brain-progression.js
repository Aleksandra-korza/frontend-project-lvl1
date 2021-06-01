import game from './index.js';
import getRandomNumb from './getRandomNumb.js';

const brainProgression = () => {
  const getGameData = () => {
    let correctAnswer = '';
    const correctAnswers = [];

    const createQuestions = (length = 10) => {
      const rules = 'What number is missing in the progression?';
      const questions = [];
      const operation = ['+', '-', '*'];
      const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
      };
      for (let i = 0; i < 3; i += 1) {
        const question = [];

        const q = getRandomNumb(0, 10);
        const w = operation[getRandomNumb(0, operation.length)];
        const a = getRandomNumb(0, 10);

        let x = operations[w](q, a);
        // correctAnswers.push(String(p));
        // questions.push(`${q} ${w} ${a}`);

        // let x = eval(`${q} ${w} ${a}`);
        for (let z = 0; z < length; z += 1) {
          // eslint-disable-next-line no-eval
          x = eval(x + w + a);
          question.push(x);
        }
        const u = getRandomNumb(0, 10);
        correctAnswer = String(question[u]);
        correctAnswers.push(correctAnswer);
        question[u] = '..';

        questions.push(question.join(' '));
      }

      return {
        questions,
        rules,
      };
    };
    const { rules, questions } = createQuestions();
    return {
      questions,
      correctAnswers,
      rules,
    };
  };
  game(getGameData);
};

export default brainProgression;
