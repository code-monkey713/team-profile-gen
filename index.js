const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
// const open = require('open');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const Teamprofile = require('./lib/Teamprofile')

let managerArray = [];
let engineerArray = [];
let internArray = [];

async function getManager() {
  inquirer.prompt(questions.manager).then((e) => {
    const newManager = new Manager(e.name, e.id, e.email, e.officePhone);
    // console.log(newManager);
    managerArray.push(newManager);
    console.log(managerArray);
    getRole();
  })
    .catch((error) => {
      console.log(error);
    });
}

function getEngineer() {
  inquirer.prompt(questions.engineer).then((e) => {
    const newEngineer = new Engineer(e.name, e.id, e.email, e.github);
    // console.log(newEngineer);
    engineerArray.push(newEngineer);
    console.log(engineerArray);
    getRole();
  })
    .catch((error) => {
      console.log(error);
    });
}

function getIntern() {
  inquirer.prompt(questions.intern).then((e) => {
    const newIntern = new Intern(e.name, e.id, e.email, e.school);
    // console.log(newIntern);
    internArray.push(newIntern);
    console.log(internArray);
    getRole();
  })
    .catch((error) => {
      console.log(error);
    });
}

function getRole() {
  inquirer.prompt(questions.action).then((e) => {
    // console.log(e.action);
    switch (e.action) {
      case 'Add an Engineer':
        getEngineer();
        break;
      case 'Add an Intern':
        getIntern();
        break;
      default:
        console.log('Make HTML page function!')
    }
  })
    .catch((error) => {
      console.log(error);
    });
}

async function start() {
  await inquirer.prompt(questions.welcome);
  getManager();
  // const html = buildHTMLTemplate(userData);
  // fs.writeFileSync('./index.html', html);
  // console.log('File was successfully written.');
  // await open('./index.html');
  // console.log('Check your browser!');
}

start();