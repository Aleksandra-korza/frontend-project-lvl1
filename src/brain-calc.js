import readlineSync from 'readline-sync';

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

const game2 = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const questions = createQuestions();
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-eval
    const answerProgram = eval(questions[i]);
    if (answer === String(answerProgram)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerProgram}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game2;
