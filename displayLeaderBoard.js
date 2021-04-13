const chalk = require('chalk');
const print = require('./print');
const leaderBoard = require('./leaderBoard');
const startQuiz = require('./startQuiz');

function displayLeaderBoard() {
  print(
    chalk.blue(`
    ----------------------------------------------------------
                        Leaderboards
    ----------------------------------------------------------
    `)
  );
  listHighScorers();
  print(
    chalk.blue(`    ----------------------------------------------------------`)
  );
  startQuiz();
}

function listHighScorers() {
  let output = '';
  leaderBoard.forEach((user) => {
    output += chalk.blue(
      `                 ${user.id} | ${user.name} | ${user.score}\n`
    );
  });
  print(output);
}

module.exports = displayLeaderBoard;
