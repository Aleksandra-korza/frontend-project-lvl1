import readlineSync from 'readline-sync';

// основная игра. Основа для игр (движок).
const startGame = (getGameData) => {
  const { questions, rules, correctAnswers } = getGameData();
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = correctAnswers[i];
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
