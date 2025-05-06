const Person = require('./person');

// Your code here

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers){
    let totalYearsOfExperience = teachers.reduce((accum, teacher) => {
        return accum + teacher.yearsOfExperience;
    }, 0)
    return totalYearsOfExperience;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
