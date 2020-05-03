const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "badge",
        message: "Put a link for your badge here."
    },
    {
        type: "input",
        name: "repoLink",
        message: "Please add a link to your repository here."
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please add a note about how to install your application."
    },
    {
        type: "input",
        name: "usageName1",
        message: "Please write the name of a dependency here."
    },
    {
        type: "input",
        name: "usageLink1",
        message: "Please link to that dependency here."
    },
    {
        type: "input",
        name: "usageName2",
        message: "Please write the name of another dependency here."
    },
    {
        type: "input",
        name: "usageLink2",
        message: "Please write a link to that dependency here."
    },
    {
        type: "input",
        name: "license",
        message: "Please enter a link for your license badge here."
    },
    {
        type: "input",
        name: "licenseInfo",
        message: "Please place a link to information regarding your license here."
    },
    {
        type: "input",
        name: "copyright",
        message: "What year are you copyrighting this?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please write information about tests here."
    },
    {
        type: "input",
        name: "developer",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "profile",
        message: "Please provide a link to your GitHub profile."
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
]).then(function(employees) {
    const stringToWrite = render(employees);

  fs.writeFile(outputPath, stringToWrite, function(err) {

    if (err) {
      return console.log(err);
    }
    

  });
});


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
