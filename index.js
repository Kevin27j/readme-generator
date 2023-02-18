const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Title of your project: '
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description: '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation guide: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instuction: '
        },
        {
            type: 'input',
            name: 'license',
            message: 'Your license: '
        }
];

// function template for readme file generator
const generateReadme = (answers) => 
`# ${answers.title}

## Description
    
    ${answers.description}
    
## Table of Contents
        
    - [Description](#description)
    - [Table of Contents (Optional)](#table-of-contents-optional)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Badges](#badges)
    - [Features](#features)
    - [How to Contribute](#how-to-contribute)
    - [Tests](#tests)
    
## Installation
    
    ${answers.installation}
    
## Usage
    
    ${answers.usage}
     
## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
## License
    
    ${answers.license}`


function init(){
    inquirer.prompt(questions)
    .then((answers) => fs.writeFile('README.md', generateReadme(answers), (err) => 
    err ? console.error(err) : console.log('success')
));
}

init()
