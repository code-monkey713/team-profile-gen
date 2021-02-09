const employee = [
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

const manager = [
  {
    type: 'input',
    message: "What is your office phone number?",
    name: 'officePhone',
  },
  {
    role: 'Manager',
  },
];

const engineer = [
  {
    type: 'input',
    message: "What is their GitHub user name?",
    name: 'github',
  },
  {
    role: 'Engineer',
  },
]

const intern = [
  {
    type: 'input',
    message: "What school are they from?",
    name: 'github',
  },
  {
    role: 'Intern',
  },
]

module.exports = employee;
module.exports = manager;
module.exports = engineer;
module.exports = intern;