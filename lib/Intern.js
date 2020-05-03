// This is the Intern subclass of the Employee class.
const Employee = require("./lib/Employee");

class Intern extends Employee {
    constructor(school) {
      super(name, id, email, "Intern");
      this.school = school;
    }
      getSchool() {
        `School: ${this.school}`;
      }
}

module.exports = Intern;