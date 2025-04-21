const readline = require('node:readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;


const askAttempt = () =>{
    r1.question("Specify the number of attempst you would like: ", (answer) => {
        numAttempts = Number(answer);
        askGuess();
    })
}

const randomInRange = (minimum, maximum) => {

    let max = Math.ceil(maximum);
    let min = Math.floor(minimum);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber;
}

const checkGuess = (number) => {


    if (number > secretNumber) {
      console.log("Too high");
    } else if (number < secretNumber) {
      console.log("Too low");

    } else if (number === secretNumber) {
      console.log("Correct!");
      return true;
    }
    if (numAttempts === 0) {
      console.log("You Loose");
      return 0;
    }
  }


  const askGuess = () => {

    r1.question("Enter a guess: ", (answer) => {
    numAttempts--;
    let result = checkGuess(Number(answer));
    if(result === 0){
        r1.close();
        return
    }
    if (result) {
      console.log("You Win!");
      r1.close();
    } else {
      askGuess();
    }
  });
};

const askRange = () => {
    r1.question("Enter a minimum number: ", (minNumber) => {
        r1.question("Enter a maximum number: ", (maxNumber) => {
            console.log(`I'm am thinking of a number between ${minNumber} and ${maxNumber}...`);
            secretNumber = randomInRange(Number(minNumber), Number(maxNumber))
            console.log(secretNumber);
            askAttempt();

        })
    })
}

askRange();
