// Enter the team manager's name, employee ID, email address, and office number
// Menu to add engineer/intern/or finish building team
// Select engineer: I am prompted to enter the engineer's name, ID, email, and GitHub username,
// I am taken back to the menu
// Select intern: enter the intern's name, ID, email, and school,
// Select Finish
// Generate HTML File
const inquirer = require("inquirer");
const fs = require("fs");
const team = [];

// Create Manager
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName",
      },

      {
        type: "input",
        message: "What is your manager's employee ID?",
        name: "managerID",
      },

      {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail",
      },

      {
        type: "input",
        message: "What is your manager's number?",
        name: "managerNumber",
      },
    ])
    .then((answers) => {
      console.log(answers);
      // Create a new Manager Object from the manager class.

      // Push manager on to team array.
      createTeam();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Engineer's name?",
        name: "engineerName",
      },

      {
        type: "input",
        message: "What is your Engineer's employee ID?",
        name: "engineerID",
      },

      {
        type: "input",
        message: "What is your Engineer's email?",
        name: "engineerEmail",
      },

      {
        type: "input",
        message: "What is your Engineer's Github?",
        name: "engineerGithub",
      },
    ])
    .then((answers) => {
      console.log(answers);
      // Create a new Manager Object from the manager class.

      // Push manager on to team array.
      createTeam();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Intern's name?",
        name: "internName",
      },

      {
        type: "input",
        message: "What is your Intern's employee ID?",
        name: "internID",
      },

      {
        type: "input",
        message: "What is your Intern's email?",
        name: "internEmail",
      },

      {
        type: "input",
        message: "What is your Intern's School?",
        name: "internSchool",
      },
    ])
    .then((answers) => {
      console.log(answers);
      // Create a new Manager Object from the manager class.

      // Push manager on to team array.
      createTeam();
    });
}
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Add an Engineer or an Intern or Finish?",
        name: "mainMenu",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.mainMenu === "Engineer") {
        createEngineer();
      } else if (answers.mainMenu === "Intern") {
        createIntern();
      } else {
        const parseHTML = generateHTML(team);

        // Write to File
        fs.writeFile("team.html", parseHTML, (err) => (err ? console.error(err) : console.log("Success!")));
      }
    });
}
// Generate HTML
const generateHTML = (team) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Builder</title>
</head>
<body>
<div>${managerName} </div>
<div>${managerID} </div>
<div>${managerEmail} </div>
<div>${managerNumber} </div>
</body>
</html>`;
// Ask Questions to Populate HTML

createManager();