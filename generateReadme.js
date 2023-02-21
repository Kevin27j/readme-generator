// function template for readme file generator
const generateReadme = (answers) => 
`# ${answers.title}
![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)
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

You can ask me anything at my email ${answers.email} or check out my Github [${answers.github}](https://github.com/${answers.github})
`


module.exports = generateReadme;