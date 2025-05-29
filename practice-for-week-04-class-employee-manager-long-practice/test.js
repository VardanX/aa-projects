const Manager = require("./manager");

let bonusMultiplier = 0.05;

const hobbes = new Manager("hobbes", 1000000, "founder");
const calvin = new Manager("calvin", 130000, "director", hobbes);
const susie = new Manager("susie", 100000, "ta manager", calvin);
const lily = new Manager("lily", 90000, "ta", susie);
const cliford = new Manager("cliford", 90000, "ta", susie);

console.log(hobbes.calculateBonus(bonusMultiplier)); // 70500
console.log(calvin.calculateBonus(bonusMultiplier)); // 20500
console.log(susie.calculateBonus(bonusMultiplier)); // 14000
console.log(lily.calculateBonus(bonusMultiplier)); // 4500
console.log(cliford.calculateBonus(bonusMultiplier)); // 4500
