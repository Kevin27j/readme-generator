// Function to generate a license badge based on user choice // Not working
function licenseBadge(data){
    const licenseUrl = '';
    for (let i = 0; i < data.length; i++){
        if (data[i].name === 'license'){
            if(data[i].choices === 'MIT'){
                return licenseUrl = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            }
            else if(data[i].choices === 'Apache 2.0 License'){
                return licenseUrl = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            }
            else if(data[i].choices === 'The Hippocratic License 3.0'){
                return licenseUrl = `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)`;
            }
            else if(data[i].choices === 'Mozilla Public License 2.0'){
                return licenseUrl = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            }
            else if(data[i].choices === 'IBM Public License Version 1.0'){
                return licenseUrl = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
            }
        }
    }
}

// function template for readme file generator
const generateReadme = (answers) => 
`# ${answers.title}
${licenseBadge(answers)}
## Description
    
${answers.description}
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
To install necessary dependencies, run the following command:

'''
${answers.installation}
'''
    
## Usage
    
You can use this applicaiton by running: '${answers.usage}'

## License
    
This project is licensed under the ${answers.license}

## Contributing

${answers.contributing}
     
## Test

To run tests, run the following command:

'''
${answers.test}
'''

## Questions

You can ask me anything at my email ${answers.questions}
`


module.exports = generateReadme;