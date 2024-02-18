const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Type in the title of your project?"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile("Generated README.md", readmeContent);
        console.log("Generated README.md successfully generated!");
        })
        .catch((error) => {
        console.error("Error occurred:", error);
        });
    }


// function call to initialize program
init();
