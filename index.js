const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require('./generateReadme');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of your project: ',
    validate: Boolean
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description: ',
    validate: Boolean
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation guide: ',
    validate: Boolean
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use this application: ',
    validate: Boolean
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license: ',
    choices: ['MIT', 
    'Apache', 
    'ISC',
    'Mozilla',
    'IBM'],  
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How to contribute: ',
    validate: Boolean
  },
  {
    type: 'input',
    name: 'test',
    message: 'How to run test: ',
    validate: Boolean
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github:',
    validate: Boolean
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:',
    validate: Boolean
  }
];

const writeFileAsync = util.promisify(fs.writeFile)

function init() {
  inquirer.prompt(questions)
    .then((answers) => writeFileAsync('README.md', generateReadme(answers), (err) =>
      err ? console.error(err) : console.log('success')
    ));
}

init()

