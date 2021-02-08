const questions = [
  {
    type: 'confirm',
    message: 'Welcome to the Teams Profile Generator! Do you wish to continue?',
    name: 'start',
  },
  {
    type: 'input',
    message: "What is the employee's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is the employee's ID number?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is the employee's email address?",
    name: 'email',
  },
];

module.exports = questions;