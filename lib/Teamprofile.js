const inquirer = require('inquirer');
const fs = require('fs');
// const employee = require('./lib/Employee');
// const engineer = require('./lib/Engineer');
// const intern = require('./lib/Intern');
// const manager = require('./lib/Manager');
// const questions = require('.lib/questions');

class Teamprofile {
  askToStart() {
    console.log('this starts the application');
    inquirer
      .prompt([
        {
          type: "input",
          name: "start",
          message: "Welcome to the Teams Profile Generator! Sit back and gather your informations and press 'ENTER' to continue!"
        }
      ])
      .then(val => {
        console.log('The questions have started');
      });
  }

}

module.exports = Teamprofile;