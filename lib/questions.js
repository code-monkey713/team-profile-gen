const actions = ['Add an Engineer', 'Add an Intern', 'Finish Building Team'];

const welcome = [
  {
    type: "input",
    name: "welcome",
    message: "Welcome to the Teams Profile Generator! Sit back, gather your informations and press 'ENTER' to continue!"
  },
];

const manager = [
  {
    type: 'input',
    message: "What is your name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is your employee ID number?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is your email address?",
    name: 'email',
  },
  {
    type: 'number',
    message: "What is your office phone number?",
    name: 'officeNumber',
  },
];

const engineer = [
  {
    type: 'input',
    message: "What is the engineer's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is the engineer's ID number?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is the engineer's email address?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is the engineer's GitHub user name?",
    name: 'github',
  },
];

const intern = [
  {
    type: 'input',
    message: "What is the intern's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is the intern's ID number?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is the intern's email address?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What school is the intern attending?",
    name: 'school',
  },
];

const action = [
  {
    type:'list',
    message: 'What action would you like to do?',
    choices: actions,
    name: 'action',
  }
];

exports.manager = manager;
exports.engineer = engineer;
exports.intern = intern;
exports.welcome = welcome;
exports.action = action;