// const inquirer = require('inquirer');
// const fs = require('fs');
// const employee = require('./lib/Employee');
// const engineer = require('./lib/Engineer');
// const intern = require('./lib/Intern');
// const manager = require('./lib/Manager');
// const questions = require('./lib/questions');
const Teamprofile = require('./lib/Teamprofile')

const teamprofile = new Teamprofile();

teamprofile.askToStart();
