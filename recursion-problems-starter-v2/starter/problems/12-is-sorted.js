/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(array){
    if(array[0] > array[1]) {
        return false
    }else if(array[1] === array[array.length - 1]) {
        if(array[0] < array[1]) {
            return true
        }
    }
    return isSorted(array.slice(1))
}

console.log(isSorted([1, 2, 4, 3, 5]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
