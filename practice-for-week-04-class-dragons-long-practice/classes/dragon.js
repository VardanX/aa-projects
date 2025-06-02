// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

class Dragon{
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragonObj){
    let dragonNames = dragonObj.map(dragon => dragon.name);
    return dragonNames;
  }
}

const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());

const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());


try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
