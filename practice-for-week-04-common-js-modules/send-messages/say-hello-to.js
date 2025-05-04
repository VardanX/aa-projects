const sayMessage = require("../messages/say-message")
const helloMessage = require("../messages/hello-message.js")

sayMessage(helloMessage);

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports= sayHelloTo;
