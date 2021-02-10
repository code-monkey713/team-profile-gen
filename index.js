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

async function start() {
  try {
    await inquirer.prompt(questions.welcome);
    getManager();
    getEngineer();
    getIntern();

    // const html = buildHTMLTemplate(userData);
    // fs.writeFileSync('./index.html', html);
    // console.log('File was successfully written.');
    // await open('./index.html');
    // console.log('Check your browser!');
  } catch (error) {
    console.log(error);
  }
}

async function getManager() {
  try {
    const m = await inquirer.prompt(questions.manager);
    const newManager = new Manager(m.name, m.id, m.email, m.officePhone);
    managerArray.push(newManager);
    console.log(managerArray);
  } catch (error) {
    console.log(error);
  }
}

async function getEngineer() {
  try {
    const e = await inquirer.prompt(questions.engineer);
    const newEngineer = new Engineer(e.name, e.id, e.email, e.github);
    engineerArray.push(newEngineer);
    console.log(engineerArray);
  } catch (error) {
    console.log(error);
  }
}

async function getIntern() {
  try {
    const i = await inquirer.prompt(questions.intern);
    const newIntern = new Intern(i.name, i.id, i.email, i.school);
    internArray.push(newIntern);
    console.log(internArray);
  } catch (error) {
    console.log(error);
  }
}

start();
// const teamprofile = new Teamprofile();

// teamprofile.askToStart();