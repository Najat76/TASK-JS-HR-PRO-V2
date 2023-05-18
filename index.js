const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class Employee {
  //Class Properties
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  //Class Methods
  idBadge(name1) {
    return this.name.forEach(
      (name1) => ("Position: ", this.position, "First Name", this.name)
    );
  }
}
console.log(idBadge(name1));
/****************************************************************** */
/*    Inheritance                                                   */
/****************************************************************** */
class Manager extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super((name, position, yearJoined, salary));
    this.bonusPercentage = bonusPercentage;
  }

  salaryIncrease(increaseAmount) {
    // their is a formula for percentage
    /* P% * X = Y */

    return this.manager.forEach(
      (salary) => Employee.salary + this.bonusPercentage * this.salary
    );
  }
}

const bonusPercentage = new Manager(90);
/*
function calculatePercentage(bonusPercentage) {
  return this.bonusPercentage * this.salary;
}
*/
