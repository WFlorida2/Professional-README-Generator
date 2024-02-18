// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
This project is licensed under the ${data.license} license.

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
