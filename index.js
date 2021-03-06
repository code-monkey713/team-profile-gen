const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const open = require('open');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const buildHTMLTemplate = require('./src/template');

let managerCard = '';
let engineerCard = '';
let internCard = '';
const managerArray = [];
const engineerArray = [];
const internArray = [];

function getManager() {
  inquirer.prompt(questions.manager).then((e) => {
    const newManager = new Manager(e.name, e.id, e.email, e.officeNumber);
    managerArray.push(newManager);
    managerCard = managerArray.map(m => `
    <div class="column is-narrow">
      <article class="message is-black">
        <div class="message-header">
          <p>${m.role}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          <div class="board-item">
            <div class="board-item-content"><span>Name: ${m.name}</span></div>
          </div>
          <div class="board-item">
            <div class="board-item-content"><span>Employee ID: ${m.id}</span></div>
          </div>
          <div class="board-item">
            <div class="board-item-content"><span>Email: <a href="mailto:${m.email}">${m.email}</a></span></div>
          </div>
          <div class="board-item">
            <div class="board-item-content"><span>Office Phone: ${m.officeNumber}</span></div>
          </div>
        </div>
      </article>
    </div>
  `).join('');
    getRole();
  })
    .catch((error) => {
      console.log(error);
    });
}

function getEngineer() {
  inquirer.prompt(questions.engineer).then((e) => {
    const newEngineer = new Engineer(e.name, e.id, e.email, e.github);
    engineerArray.push(newEngineer);
    engineerCard = engineerArray.map(g => `
    <div class="column is-narrow">
    <article class="message is-link">
      <div class="message-header">
        <p>${g.role}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        <div class="board-item">
          <div class="board-item-content"><span>Name: ${g.name}</span></div>
        </div>
        <div class="board-item">
          <div class="board-item-content"><span>Employee ID: ${g.id}</span></div>
        </div>
        <div class="board-item">
          <div class="board-item-content"><span>Email: <a href="mailto:${g.email}">${g.email}</a></span></div>
        </div>
        <div class="board-item">
          <div class="board-item-content"><span>GitHub: <a href="https://github.com/${g.github}" target="_blank">${g.github}</a></span></div>
        </div>
      </div>
    </article>
  </div>
    `).join('');
    getRole();
  })
    .catch((error) => {
      console.log(error);
    });
}

function getIntern() {
  inquirer.prompt(questions.intern).then((e) => {
    const newIntern = new Intern(e.name, e.id, e.email, e.school);
    internArray.push(newIntern);
    internCard = internArray.map(i => `
    <div class="column is-narrow">
      <article class="message is-info">
        <div class="message-header">
          <p>${i.role}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          <div class="board-item">
            <div class="board-item-content"><span>Name: ${i.name}</span></div>
          </div>
          <div class="board-item">
            <div class="board-item-content"><span>Employee ID: ${i.id}</span></div>
          </div>
          <div class="board-item">
            <div class="board-item-content"><span>Email: <a href="mailto:${i.email}">${i.email}</a></span></div>
          </div>
          <div class="board-item">
            <div class="board-item-content"><span>School: ${i.school}</span></div>
          </div>
        </div>
      </article>
    </div>
    `).join('');
    getRole();
  })
    .catch((error) => {
      console.log(error);
    });
}

function getRole() {
  inquirer.prompt(questions.action).then((e) => {
    switch (e.action) {
      case 'Add an Engineer':
        getEngineer();
        break;
      case 'Add an Intern':
        getIntern();
        break;
      default:
        makeHTML();
    }
  })
    .catch((error) => {
      console.log(error);
    });
}

async function makeHTML() {
  try {
    console.log('Please wait while the index.html file is being created.');
    const html = buildHTMLTemplate(managerCard, internCard, engineerCard);
    fs.writeFileSync('./dist/index.html', html);
    console.log('Your file has been successfully written to the (dist) folder of the project.');
    await open('./src/index.html');
    console.log('Check your browser for the team profile generated!');
  } catch (error) {
    console.log(error);
  }
}

async function start() {
  await inquirer.prompt(questions.welcome);
  getManager();
}

start();