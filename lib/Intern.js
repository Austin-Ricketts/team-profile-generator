// This is the Intern subclass of the Employee class.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email, "Intern");
      this.school = school;
    }
    getRole() {
        return "Intern";
    }
      getSchool() {
        return this.school;
      }
}

module.exports = Intern;