import game from './index.js';

const gameCalc = () => {
  const createQuestions = (length = 3) => {
    const questions = [];
    const operation = ['+', '-', '*'];
    let operations = '';
    for (let i = 0; i < length; i += 1) {
      const q = Math.trunc(Math.random() * 100);
      const w = operation[Math.floor(Math.random() * operation.length)];
      const a = Math.trunc(Math.random() * 100);
      operations = (`${q} ${w} ${a}`);
      questions.push(operations);
    }
    return questions;
  };

  const rules = 'What is the result of the expression?';

  const questions = createQuestions();

  const correctAnswers = [];
  for (let i = 0; i < questions.length; i += 1) {
    // eslint-disable-next-line no-eval
    const correctAnswer = String(eval(questions[i]));
    correctAnswers.push(correctAnswer);
  }

  game(questions, rules, correctAnswers);
};

export default gameCalc;
