const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
// const open = require('open');
// const employee = require('./lib/Employee');
// const engineer = require('./lib/Engineer');
// const intern = require('./lib/Intern');
// const manager = require('./lib/Manager');
// const questions = require('./lib/questions');
// const Teamprofile = require('./lib/Teamprofile')

async function start() {
  try {
    await inquirer.prompt(questions.welcome);
    
    const manager = await inquirer.prompt(questions.manager);
    console.log(manager);

    

    const engineer = await inquirer.prompt(questions.engineer);
//     const teamprofile = new Teamprofile();
//     teamprofile.askToStart();

    // const html = buildHTMLTemplate(userData);
    // fs.writeFileSync('./index.html', html);
    // console.log('File was successfully written.');
    // await open('./index.html');
    // console.log('Check your browser!');
  } catch (error) {
    console.log(error);
  }
}

start();
// const teamprofile = new Teamprofile();

// teamprofile.askToStart();