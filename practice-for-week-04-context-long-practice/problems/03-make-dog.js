// Your code here
class Dog {
  constructor(name) {
    this.name = name;
  }

  static makeJet() {
    return new Dog("Jet");// new instance of Dog class with name property of "Jet"
  }

  changeName(newName) {
    this.name = newName;
    return this.name;
  }

  speak(word) {
    return `${this.name} says ${word}`;
  }
}

let dog1 = Dog.makeJet(); // returns an object

console.log(dog1.name); // Jet
console.log(dog1.speak("hello")); // Jet says hello
console.log(dog1.changeName("Freyja")); // Freyja
console.log(dog1.name); // Freyja
console.log(dog1.speak("hello")); // Freyja says hello

let dog2 = Dog.makeJet();
console.log(dog2.name); // Jet

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Dog;
} catch {
  module.exports = null;
}
