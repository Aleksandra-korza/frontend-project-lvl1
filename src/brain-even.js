import readlineSync from 'readline-sync';

const invertAnswer = (answerUser) => {
  if (answerUser === 'yes') {
    return 'no';
  }
  return 'yes';
};

const createQuestions = (length = 3) => {
  const questions = [];
  for (let i = 0; i < length; i += 1) {
    const q = Math.trunc(Math.random() * 100);
    questions.push(q);
  }
  return questions;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const questions = createQuestions();
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && questions[i] % 2 === 0) || (answer === 'no' && questions[i] % 2 !== 0)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${invertAnswer(answer)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
