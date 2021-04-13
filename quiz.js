const readline = require('readline-sync');
const chalk = require('chalk');
const print = require('./print');
const questions = require('./questionBank');

function startQuiz(finalScore) {
  questions.forEach((ques) => {
    const { question, options, answer } = ques;
    print(chalk.white(`   ${question}\n`));
    const playerAnswer = readline.question(
      options.forEach((option) => print(chalk.gray(`   ${option}`)))
    );
    if (playerAnswer.toLowerCase() === answer) {
      finalScore += 1;
      print(chalk.green(`   Correct Answer\n`));
      print(chalk.yellow(`   Current Score: ${finalScore}\n`));
    } else {
      print(chalk.red(`   Wrong Answer\n`));
      print(chalk.yellow(`   Correct Answer: ${options[answer - 1]}\n`));
      print(chalk.yellow(`   Current Score: ${finalScore}\n`));
    }
  });
  return finalScore;
}

module.exports = startQuiz;
