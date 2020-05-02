// This is the Manager subclass.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
      super("Austin", 3, "alphabet@asdf");
      this.officeNumber = officeNumber;
    }
      getOfficeNumber() {
          console.log(`Office Number: ${this.officeNumber}`);
      }
}

const austin = new Manager(10);

austin.getName();
austin.getId();
austin.getEmail();
austin.getOfficeNumber();




