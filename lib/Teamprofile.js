const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./Employee');
const manager = require('./Manager');
const engineer = require('./Engineer');
const intern = require('./Intern');

class Teamprofile {
  getEmployee() {
    // console.log('this starts the questions for employees');
    inquirer
      .prompt([
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
      ])
      .then(val => {
        console.log('I need to return the name, id, email values here');
      });
  };

  getManager(){
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the office phone number?",
        name: 'officeNumber',
      }
    ])
    .then(val => {
      console.log('I need to return the officeNumber and role=manager here');
    });
  };

  getEngineer(){
    console.log('this starts the questions for the engineers');
  };

  getIntern(){
    console.log('this starts the questions for the interns');
  };
  // ask for team managers name, id, email, office number
  // ask for which team member you like to add with list of engineer, intern, I don't want to add anymore team members and close
  // ask enginners name, id, email, github user name when selected
  // ask for intern name, id, email, school name when selected
  // output of the information is generated on HTML
  // automatically open the html page when user selected I don't want to add anymore team members

  askToStart() {
    console.log('this starts the application');
    inquirer
      .prompt([
        {
          type: "input",
          name: "start",
          message: "Welcome to the Teams Profile Generator! Sit back, gather your informations and press 'ENTER' to continue!"
        }
      ])
      .then(val => {
        console.log('The questions have started');
        getEmployee();
        // this.getManager();
      });
  }
}

module.exports = Teamprofile;