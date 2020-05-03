// This is the Manager subclass.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
      super(name, id, email, "Manager");
      this.officeNumber = officeNumber;
    }
      getOfficeNumber() {
          `Office Number: ${this.officeNumber}`;
      }
}

module.exports = Manager;




