const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "Please enter the Installation Instructions for your project.",
        name: "projectInstallationInstructions"    
    },
    {
        type:"input",
        message: "Please enter any Usage Information for your project.",
        name: "projectUsageInformation"
    },
    {
        type:"input",
        message: "Please enter any Contribution Guidelines for your project.",
        name: "projectContributionGuidelines"
    },
    {
        type:"input",
        message: "Please enter any Test Instructions for your project.",
        name: "projectTestInstructions"
    },
    {
        type:"list",
        message: "Please choose a license for your application from the list of options below.",
        choices: ["MIT","General Public License","Apache"],
        name: "projectLicense"
    },
    {
        type:"input",
        message: "What is your GitHub Username?",
        name: "githubUsername"
    },
    {
        type:"input",
        message: "What is your email address?",
        name: "emailAddress"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
    console.log(response.emailAddress)
    )
}

// function call to initialize program
init();
