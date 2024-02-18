// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";

  switch (data.license) {
    case "Apache License 2.0":
      licenseBadge = "[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "None":
      licenseBadge = "No License selected / no license badge available";
      break;
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Eclipse Public License 2.0":
      licenseBadge = "[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://www.eclipse.org/legal/epl-2.0/)";
      break;
    }
    return `# ${data.title}
    
    ${licenseBadge}
    
  
## Description
    ${data.description}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the "${data.license}" license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})

For additional questions, please email [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;

