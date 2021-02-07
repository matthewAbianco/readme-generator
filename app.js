
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./src/readmepage");
const util = require("util");
const writeAsync = util.promisify(fs.writeFile);

// the list of questions that will make the README.md file generate
const promptUser = () => {
    return inquirer.prompt([
  
  // Project Name
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your projects name? (Required)',
        validate: projectName => {  
          if (projectName) {
            return true;
          } else {
            console.log('Please enter your projects name!');
            return false;
          }
        }
      },
  // Project description
      {
        type: 'input',
        name: 'description',
        message: 'Enter a discription of the project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Tell people about your project!');
            return false;
          }
        }
      },
  // Project installation
      {
          type: 'input',
          name: 'installation',
          message: 'Describe how to install the application. (Required)',
          validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Tell people how to install it!');
              return false;
            }
          }
        },
  // Project usage
  {
      type: 'input',
      name: 'usage',
      message: 'Describe how or what this is used for.  (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Tell people what it is used for!');
          return false;
        }
      }
    },
  
    // Project title
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to give your project?',
      choices: [
          "GNU",
          "Academic",
          "MIT",
          "ISC",
          "Mozilla",
          "Open"
      ],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please select a license for your project.');
          return false;
        }
      }
    },
      
    // what to do if they want to contribute to the project 
  {
    type: 'input',
    name: 'contributing',
    message: 'How to people contribute to the project  (Required)',
    validate: questionsInput => {
      if (questionsInput) {
        return true;
      } else {
        console.log('tell people how they can contribute to your project!');
        return false;
      }
    }
  },  
  // what to do if they have questions about the project
{
    type: 'input',
    name: 'tests',
    message: 'Tell people how to test their work  (Required)',
    validate: questionsInput => {
      if (questionsInput) {
        return true;
      } else {
        console.log('tell people what to do if they need to test it!');
        return false;
      }
    }
  },
  
    // what to do if they have questions about the project
  {
      type: 'input',
      name: 'questions',
      message: 'What do people do if they have issues.  (Required)',
      validate: questionsInput => {
        if (questionsInput) {
          return true;
        } else {
          console.log('tell people what to do if they have questions!');
          return false;
        }
      }
    },
  // Github Username
  {
      type: 'input',
      name: 'usage',
      message: 'What is your Github username?  (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter a valid Github Username!');
          return false;
        }
      }
    },
  // Email
  {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.  (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('please enter a valid email address!');
          return false;
        }
      }
    },
    ]);
  };
  

// creates an a sync function to capture and generate the data. 
  async function init() {
    try {
        const response = await promptUser();
        const readmeContent = generateReadme(response);
        await writeAsync('./finished/README.md', readmeContent);
        console.log(' README.md created. check the "finished" folder for the final outcome');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  