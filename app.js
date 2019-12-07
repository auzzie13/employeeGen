//Dependencies
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamMembers = [];

function app() {
    function createMan() {
        console.log("working");
        inquirer.prompt([
            {
                type: "input",
                name: "ManagerName",
                message: "What is your manager's name?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                  }
            },
            {
                type: "input",
                name: "ManagerId",
                message: "What is your manager's id?",
                validate: answer => {
                    const pass = answer.match(
                      /^[1-9]\d*$/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a positive number greater than zero.";
                  }
            },
            {
                type: "input",
                name: "ManagerEmail",
                message: "What is your manager's email?",
                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a valid email address.";
                  }
            },
            {
                type: "input",
                name: "ManagerOfficeNum",
                message: "What is your manager's phone number?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                  }
            },
        ]).then(answers => {
            console.log(answers);
            const manager = new Manager (answers.ManagerId, answers.ManagerName, answers.ManagerEmail, answers.ManagerOfficeNum)
            teamMembers.push(manager);
        })
    }

createMan();
};

app();