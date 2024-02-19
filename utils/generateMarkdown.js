// function to generate markdown for README
function generateMarkdown(data) {
  // Default badge for unknown license if a match to the badge site is down or not available
  let licenseBadge = "[![License: Unknown](https://img.shields.io/badge/License-Unknown-lightgrey.svg)]";
  // Map containing license types and their corresponding badges
  const licenseMap = {
      "Apache License 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "MIT License": "[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "Eclipse Public License 2.0": "[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://www.eclipse.org/legal/epl-2.0/)",
      "None": "[![License: None](https://img.shields.io/badge/License-None-lightgrey.svg)]"
  };

  // Iterate through licenseMap to find a match with the provided license data
  for (const licenseType in licenseMap) {
      if (data.license === licenseType) {
          licenseBadge = licenseMap[licenseType]; // Assign corresponding badge if match is found
          break; // Exit loop once a match is found
      }
  }

  // Generate Markdown content for README
  return `# ${data.title}\n ${licenseBadge}
    
  
## Description
${data.description}

## Table of Contents
  - ${data.title}
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

module.exports = generateMarkdown; // Export the generateMarkdown function for use in other files
