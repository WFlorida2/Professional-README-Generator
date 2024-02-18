const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Email validation function
function validateEmail(email) {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email) && email.trim() !== ""; // Check if email matches pattern and is not empty after trimming
    }

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please type in the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project:",
        choices: ["Apache License 2.0",
                    "None", 
                    " GNU General Public License v3.0",
                    " MIT License",
                    " BSD 2-Claue 'Simplified' License",
                    " BSD 3-Clause New or Revised License",
                    " Boost Software License 1.0" ,
                    " Creative Commons Zero v1.0 Universal" ,
                    " Eclipse Public License 2.0" ,
                    " GNU General Public License v2.0" ,
                    " Mozilla Public License 2.0" ,
                    " The Unlicense" 
                    ]
    },
    {
        type: "input",
        name: "github",
        message: "Please type in your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: function (input) {
            // Validate the input using the validateEmail function
            return validateEmail(input) ? true : "Please enter a valid email address";
        }
    }
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
