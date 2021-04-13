const readline = require('readline-sync');
const chalk = require('chalk');
const loading = require('loading-indicator');
const print = require('./print');
const displayLeaderBoard = require('./displayLeaderBoard');

function welcomeMessage() {
  const answer = readline.question(chalk`
    {yellowBright ----------------------------------------------------------}
                    {yellowBright Welcome to Health Quiz}            
            
     {yellowBright Test your knowledge of health, fat loss, and weight loss}
            
                    {yellowBright Are you ready? [Y/N]}        
    {yellowBright ----------------------------------------------------------}
    `);

  if (answer.toLowerCase() !== 'y') {
    print(
      chalk.red(`
    Sorry to see you go...
    `)
    );
    return;
  } else {
    let timer = loading.start(chalk`
    {green Loading questions...}
    `);

    setTimeoutAsync(1000)
      .then(() => {
        loading.stop(timer);
        timer = loading.start(chalk`
    {green Starting the quiz...}
    `);
        return setTimeoutAsync(1000);
      })
      .then(() => {
        loading.stop(timer);
        displayLeaderBoard();
      });
  }
}

function setTimeoutAsync(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

module.exports = welcomeMessage;
