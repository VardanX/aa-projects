// Your code here
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce() {
        console.log(
        `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
        );
    }

    static introducePeople(people){
        if(!Array.isArray(people)) {
            throw new Error("introducePeople only takes an array as an argument.")
        }
        people.forEach(p => {
            if(!(p instanceof Person)){
                throw new Error(
                  'All items in array must be Person class instances."'
                );
            }else{
                p.introduce();
            }
        })
    }
}



const person1 = new Person("kristen", "chauncey", 38);
person1.introduce()
const person2 = new Person("Vardan", "Bogati", 25);
person2.introduce()




/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
