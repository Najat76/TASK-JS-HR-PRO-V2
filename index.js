const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class Employee {
  //Class Properties
  constructor(name, position, yearJoined, salary) {
    this.name = "Najat";
    this.position = "Team Leader";
    this.yearJoined = "2023";
    this.salary = "1000 KD";
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
  }

  function percentage (percentage) {
    return this.percentage * this.salary;
  }
  salaryIncrease(increaseAmount) {
    // their is a formula for percentage
    /* P% * X = Y */

    return this.manager.forEach((salary) => Employee.salary + salaryIncrease);
  }
}

const bonusPercentage = new Manager(90);
