import game from './index.js'; // импортируем функцию которая создает игру. в src папке лежат файлы нашей программы.

// отличающаяся часть новой игы. Игра которая использует движок из файла game.js.

const gameEven = () => {
  const createQuestions = (length = 3) => {
    const questions = [];
    for (let i = 0; i < length; i += 1) {
      const q = Math.trunc(Math.random() * 100);
      questions.push(q);
    }
    return questions;
  };

  const questions = createQuestions();

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const correctAnswers = [];
  for (let i = 0; i < questions.length; i += 1) {
    const correctAnswer = questions[i] % 2 === 0 ? 'yes' : 'no';
    correctAnswers.push(correctAnswer);
  }
  game(questions, rules, correctAnswers); // вызываю функцию, которая создает игру.
};

export default gameEven;
