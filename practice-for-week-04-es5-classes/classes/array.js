// Your code here
Array.prototype.isEqual = function (otherArray) {
  // Check if arrays have the same length
  if (this.length !== otherArray.length) {
    return false;
  }

  // Check if each element is equal
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== otherArray[i]) {
      return false;
    }
  }

  return true;
};

let a = [1, 3, 5];
let b = [1, 3, 5];
console.log(a.isEqual(b));
