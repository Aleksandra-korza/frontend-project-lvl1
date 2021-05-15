import readlineSync from 'readline-sync';

const createQuestions = (length = 3) => {
  const questions = [];
  let operations = '';
  for (let i = 0; i < length; i += 1) {
    const q = Math.trunc(Math.random() * 100);
    const a = Math.trunc(Math.random() * 100);
    operations = (`${q} ${a}`);
    questions.push(operations);
  }
  return questions;
};

// eslint-disable-next-line consistent-return
const answerProgram2 = (numb) => {
  const splits = numb.split(' ');
  // eslint-disable-next-line no-alert
  const numbMax = Math.max(Number(splits[0]), Number(splits[1]));
  // eslint-disable-next-line no-alert
  const numbMin = Math.min(Number(splits[0]), Number(splits[1]));
  if ((numbMax / numbMin) % 2 === 0) {
    return numbMin;
  }
  // eslint-disable-next-line for-direction
  for (let i = numbMin - 1; i > 0; i -= 1) {
    if ((numbMin % i === 0) && (numbMax % i === 0)) {
      return i;
    }
  }
};

const game3 = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const questions = createQuestions();
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-eval
    // eslint-disable-next-line no-alert
    const answerProgram = answerProgram2(questions[i]);
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

export default game3;
