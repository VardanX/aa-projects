// 1.
function sum(array) {
  let sum = 0;
  if (!(Array.isArray(array))){
    throw Error("The argument should only be an array")
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let res;
try{
  res = sum(null);
  console.log(res);
}catch(error){
  console.error(error.name + ": " + error.message);
}


// 2.

function sayName(name){
  if (typeof name !== "string"){
    throw new TypeError("Invalid name! Must be a string!");
  }else{
    console.log(name);
  }
}



// tests
try{
  sayName("Alex");
  sayName(1);
}catch(error){
  console.error(`${error.name}: ${error.message}`);
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  greet("");
}catch(error){
  console.error(error.name + ": " + error.message);
}finally{
  console.log("Hello World")
}
