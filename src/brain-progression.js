import game from './index.js';

const brainProgression = () => {
  let correctAnswer = '';
  const correctAnswers = [];
  const createQuestions = (length = 10) => {
    const questions = [];
    const operation = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
      const question = [];

      const q = Math.trunc(Math.random() * 10);
      const w = operation[Math.floor(Math.random() * operation.length)];
      const a = Math.trunc(Math.random() * 10);
      // eslint-disable-next-line no-eval
      let x = eval(`${q} ${w} ${a}`);
      for (let z = 0; z < length; z += 1) {
        x = (x + w + a);
        question.push(x);
      }
      const u = Math.trunc(Math.random() * 10);
      // eslint-disable-next-line no-eval
      correctAnswer = String(eval(question[u]));
      correctAnswers.push(correctAnswer);
      question[u] = '..';

      questions.push(question.join(' '));
    }

    return questions;
  };

  const questions = createQuestions();

  const rules = 'What number is missing in the progression?';

  game(questions, rules, correctAnswers);
};

export default brainProgression;
