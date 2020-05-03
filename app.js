const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

const init = () => {
    inquirer.prompt([
    {
        name: "role",
        type: "list",
        message: "Please choose the Employee's role to be entered: ",
        choices: ["Manager", "Engineer", "Intern"]
        }
    ])
        .then((res) => {
            if (res.role === "Manager") {addManager()}
            else if (res.role === "Engineer") {addEngineer()}
            else if (res.role === "Intern") {addIntern()}
        });
}

const buildTeam = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to keep building your team?',
            name: 'build'
        }
    ])
        .then((res) => {
            if (res.build === true) {init();}
            else if (res.build === false) {displayTeam();}
        });
}

const addManager = () => {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is this Employee's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is this Employee's ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is this Employee's email address?",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is this Employee's Office Number?",
        },
    ]).then(addMan => {
        const empAdd = new Manager(addMan.name, addMan.id, addMan.email, addMan.officeNumber);
        employees.push(empAdd);
        buildTeam();
});
const addEngineer = () => {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is this Employee's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is this Employee's ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is this Employee's email address?",
        },
        {
            name: "github",
            type: "input",
            message: "What is this Employee's GitHub profile URL?",
        },
    ]).then(addEng => {
        const empAdd = new Engineer(addEng.name, addEng.id, addEng.email, addEng.github);
        employees.push(empAdd);
        buildTeam();
});
const addIntern = () => {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is this Employee's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is this Employee's ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is this Employee's email address?",
        },
        {
            name: "school",
            type: "input",
            message: "What is the name of this intern's school?",
        },
    ]).then(addInt => {
        const empAdd = new Intern(addInt.name, addInt.id, addInt.email, addInt.school);
        employees.push(empAdd);
        buildTeam();
});

const displayTeam = () => {
    const stringToWrite = render(employees);
    fs.writeFile(outputPath, stringToWrite, function (err) {
        if (err) {
            throw err;
        }
    });
}

init();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
