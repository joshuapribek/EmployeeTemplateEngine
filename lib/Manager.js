const Employee = require("./Employee");
class Manager extends Employee{
    constructor(name, role, id, email, number){
        super(name, role, id, email)
        this.number = number
    }
    
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

};

module.exports = Manager;