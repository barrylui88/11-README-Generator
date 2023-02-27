// Links to other Javascript Files
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// JavaScript Variables
let writeData = "";
let jsProjectTitle = "";
let jsProjectDescription = "";
let jsProjectInstallationInstructions = "";
let jsProjectUsageInformation = "";
let jsProjectContributionGuidelines = "";
let jsProjectTestInstructions = "";
let jsProjectLicense = "";
let jsGithubUsername = "";
let jsEmailAddress = "";

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle"
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
    fs.appendFile(fileName, data, function (error) {
        if (error) {
            console.error(err);
        } else {
            console.log('Commit logged!');
        }
    }
)
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
    jsProjectTitle = response.projectTitle;
    jsProjectDescription = response.projectDescription;
    jsProjectInstallationInstructions = response.projectInstallationInstructions;
    jsProjectUsageInformation = response.projectUsageInformation;
    jsProjectContributionGuidelines = response.projectContributionGuidelines;
    jsProjectTestInstructions = response.projectTestInstructions;
    jsProjectLicense = response.projectLicense;
    jsGithubUsername = response.githubUsername;
    jsEmailAddress = response.emailAddress;
    writeData = 
    `# ${jsProjectTitle}
    ${jsProjectDescription}
    ${jsProjectInstallationInstructions}
    ${jsProjectUsageInformation}
    ${jsProjectContributionGuidelines}
    ${jsProjectTestInstructions}
    ${jsProjectLicense}
    ${jsGithubUsername}
    ${jsEmailAddress}`
    writeToFile("readme.md",writeData)
    }
    )
}

// function call to initialize program
init();