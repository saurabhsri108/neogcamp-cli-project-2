const readline = require('readline-sync');
const chalk = require('chalk');
const print = require('./print');
const quiz = require('./quiz');
const leaderBoard = require('./leaderBoard');

let finalScore = 0;

function startQuiz() {
  const name = readline.question(chalk.magenta(`   What's your name? `));
  // leaderBoard.push({ id: 5, name, score: 0 });
  print(
    chalk.green(`\n   Welcome ${name}. Let's start the quiz. Wish you best!\n`)
  );
  finalScore = quiz(finalScore);
  print(
    chalk.green(
      `\n   Congratulations ${name}. Your final score is ${finalScore}\n`
    )
  );
}

module.exports = startQuiz;
