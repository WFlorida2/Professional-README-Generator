const fs = require("fs"); // Import the Node.js File System module for file operations
const path = require('path'); // Import the Node.js Path module for path-related operations
const inquirer = require("inquirer"); // Import the Inquirer module for user prompts
const generateMarkdown = require("./utils/generateMarkdown"); // Import the custom generateMarkdown function from a local file

// Email validation function
function validateEmail(email) {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email) && email.trim() !== ""; // Check if email matches pattern and is not empty after trimming
}

// Array of questions for user
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
                    "MIT License",
                    "Eclipse Public License 2.0",
                    "None"
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

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data); // Write data to the specified file synchronously
}

// Function to initialize program
function init() {
    inquirer.prompt(questions) // Prompt the user with the array of questions
        .then((answers) => { // Once user provides answers
            const readmeContent = generateMarkdown(answers); // Generate Markdown content using provided answers
            console.log("Generated Markdown:");
            console.log(readmeContent); // Log generated Markdown for debugging
            writeToFile("Generated_README.md", readmeContent); // Write generated Markdown to a file
            console.log("Generated README.md successfully generated!");
        })
        .catch((error) => { // If any error occurs during the process
            console.error("Error occurred:", error); // Log the error
        });
}

// Function call to initialize program
init();
