// This is the Engineer subclass of the Employee class.
const Employee = require("./lib/Employee");

class Engineer extends Employee {
    constructor(github) {
      super(name, id, email, "Engineer");
      this.github = github;
    }
      getGithub() {
        `Github: ${this.github}`;
      }
}

module.exports = Engineer;