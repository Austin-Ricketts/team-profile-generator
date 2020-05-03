// This is the parent class for all other Employee subclasses.
class Employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
  
    getName() {
      `Name: ${this.name}`;
    } 
    getId() {
      `Id: ${this.id}`;
    } 
    getEmail() {
      `Email: ${this.email}`;
    } 
    getRole() {
      `${this.role}`;
    }
  }


  module.exports = Employee;