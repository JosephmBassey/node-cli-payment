const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ravePay = require('./payment')
const cliPaymentInputs = require('./cli-questions')

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Swipe Pay', {
      horizontalLayout: 'short'
    })
  )
);
console.log('Enter ')

const run = async () => {
  try {
    const credentials = await cliPaymentInputs();
    ravePay(credentials)
  } catch (error) {
    console.log(error)
  }
}
run()