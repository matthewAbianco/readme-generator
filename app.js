const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/readmepage');

const promptUser = () => {
  return inquirer.prompt([


    // 1.description
    // 2.table of contents
    // 3.installation
    // 4.usage
    // 5.licesnse
    // 6.contributing
    // 7.tests
    // 8.questions



// Project Name
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your projects name? (Required)',
      validate: nameInput => {
        if (nameInput) {
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
      validate: githubInput => {
        if (githubInput) {
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
        validate: githubInput => {
          if (githubInput) {
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
    validate: githubInput => {
      if (githubInput) {
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
        "Academic",
        "GNU",
        "MIT",
        "ISC",
        "Mozilla",
        "Open"
    ],
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please select a license for your project.');
        return false;
      }
    }
  },

  // what to do if they have questions about the project
{
    type: 'input',
    name: 'questions',
    message: 'What do people do if they have issues.  (Required)',
    validate: githubInput => {
      if (githubInput) {
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
    validate: githubInput => {
      if (githubInput) {
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
    name: 'Email',
    message: 'Enter your email address.  (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('please enter a valid email address!');
        return false;
      }
    }
  },


    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
    // will be uncommented in lesson 4
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });
