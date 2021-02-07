// generateReadme function populating the README.md
function generateReadme(response) {
  return `
<h1>${response.projectName} </h1>

![badge](https://img.shields.io/badge/license-${response.license}-blue)<br />

## <h2>Description</h2>
 ${response.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
 ${response.installation}

## Usage
 ${response.usage}

## License
![badge](https://img.shields.io/badge/license-${response.license}-darkyellow)
<br />
This application is covered by the ${response.license} license. 

## Contributing
 ${response.contributing}

## Tests
 ${response.tests}

## <h2 >Questions</h2>
 ${response.questions}<br />
 <br />
 Email me with any questions: ${response.email}<br /><br />
<br />
Find more of: [${response.username}](https://github.com/${response.username})<br />



  `;
}

module.exports = generateReadme;