    const fs = require("fs"); // Import the Node.js File System module for file operations
    const path = require('path'); // Import the Node.js Path module for path-related operations
    const inquirer = require("inquirer"); // Import the Inquirer module for user prompts
    const generateMarkdown = require("./utils/generateMarkdown"); // Import the custom generateMarkdown function from a local file
    const { exec } = require('child_process');
    
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
            type: "confirm",
            name: "addInstallation",
            message: "Do you want to add installation guidelines?",
            default: false
        },
        {
            type: "editor",
            name: "installation",
            message: "For installation guidlines: <enter>< click i ><type text><esc key><:wq to save>",
            when(answers) {
                return answers.addInstallation === true;
            }
        },
        {
            type: "confirm",
            name: "addUsage",
            message: "Do you want to add usage guidelines?",
            default: false
        },
        {
            type: "editor",
            name: "usage",
            message: "For usage guidlines: <enter>< click i ><type text><esc key><:wq to save>",
            when(answers) {
                return answers.addUsage === true;
            }
        },
        {
            type: "input",
            name: "contribution",
            message: "Please provide contribution guidelines:"
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide test guidlines:"
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
        inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile("Generated_README.md", readmeContent);
            console.log("Generated_README.md successfully generated!");
    
            // Open Sublime Text with the entered text
            exec('subl Generated_README.md', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`Sublime Text opened with Generated_README.md`);
            });
        })
        .catch((error) => {
            console.error("Error occurred:", error);
        });
    }
    
    // function call to initialize program
    init();
