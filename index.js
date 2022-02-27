// TODO: Include packages needed for this application
function init() {

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("Util");
const writeFileAsync = util.promisify(fs.writeFile);
const githubAPI = require("./github");


inquirer;
const promptUser = () => {
  return inquirer
    .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "list",
        message: "What kind of license do you want for the project?",
        name: "license",
        choices: ["MIT", "Gpl-3.0", "Unlicense", "Apache-2.0", "None"],
      },
      {
        
            type: "input",
            message: "How can the user run tests for your project?",
            name: "tests",
      },
      {
        type: "input",
        message:
          "How can a user contributes to your poject?",
        name: "contributing",
      },
      {
        type: "input",
        message:
          "What is your GitHub username?",
        name: "input",
      },
      {
        type: "input",
        message:
          "What is your e-mail?",
        name: "input",
      },
    ])
    .then(function (answers) {
       return answers;
    });
};




// TODO: Create a function to write README file
async function init() {
    try {
      const answers = await promptUser();
      githubAPI.Data(answers.username).then(async (github) => {
        const ghLicense = await githubAPI.License(answers.license);
        const readMe = generateReadme(answers, github);
        await writeFileAsync("README.md", readMe);
        await writeFileAsync("License.txt", ghLicense);
        console.log("Created README!");
      });
    } catch (err) {
      console.log(err);async function init() {
        try {
          const answers = await promptUser();
          githubAPI.Data(answers.username).then(async (github) => {
            const ghLicense = await githubAPI.License(answers.license);
            const readMe = generateReadme(answers, github);
            await writeFileAsync("README.md", readMe);
            await writeFileAsync("License.txt", ghLicense);
            console.log("Created README!");
          });
        } catch (err) {
          console.log(err);
        }
      }
      
      init();
    }
  }
  
  init();

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        var myREADME = generateMarkdown(answers)

        console.log(myREADME)
    })
    
   
}

// Function call to initialize app
init();
