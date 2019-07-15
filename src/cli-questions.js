const inquirer = require('inquirer')
module.exports =  cliPaymentInputs = () => {
  const questions = [{
      name: 'cardno',
      type: 'input',
      message: 'Enter your Card Number',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your Valid Card Details.';
        }
      }
    },
    {
      name: 'cvv',
      type: 'text',
      message: 'Enter your CVV:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter Correct CVV.';
        }
      }
    },
    {
      name: 'expirymonth',
      type: 'text',
      message: 'Enter Your Card Expiry Month:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter Correct Card Expiry Month.';
        }
      }
    },
    {
      name: 'expiryyear',
      type: 'text',
      message: 'Enter Your Card Expiry Year:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter Correct Card Expiry Year.';
        }
      }
    },
    {
      name: 'email',
      type: 'text',
      message: 'Enter Your Email Address:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a valid Email address.';
        }
      }
    },
    {
      name: 'firstname',
      type: 'text',
      message: 'Enter Your First Name:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Enter First Name.';
        }
      }
    },
    {
      name: 'lastname',
      type: 'text',
      message: 'Enter Your last Name:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Enter last Name.';
        }
      }
    }
  ];
  return inquirer.prompt(questions);
}

