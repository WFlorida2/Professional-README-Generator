// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";

  switch (data.license) {
    case "Apache License 2.0":
      licenseBadge = "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)";
      break;
    case "None":
      licenseBadge = "No License selected / no license badge available";
      break;
    case "GNU General Public License v3.0":
      licenseBadge = "[![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge = "[![License: BSD 2-Clause 'Simplified' License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 3-Clause New or Revised License":
      licenseBadge = "[![License: BSD 3-Clause New or Revised License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Boost Software License 1.0":
      licenseBadge = "[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge = "[![License: Creative Commons Zero v1.0 Universal](https://img.shields.io/badge/License-CC0%201.0-green.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License 2.0":
      licenseBadge = "[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://www.eclipse.org/legal/epl-2.0/)";
      break;
    case "GNU General Public License v2.0":
      licenseBadge = "[![License: GNU General Public License v2.0](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)";
      break;
    case "The Unlicense":
      licenseBadge = "[![License: The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
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

