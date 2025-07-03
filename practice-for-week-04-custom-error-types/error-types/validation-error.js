// Your code here
class ValidationError extends Error{
  constructor(message="Invalid input", inputName, value, ...params){
    super(...params);

    if(Error.captureStackTrace){
      Error.captureStackTrace(this, ValidationError)
    }

    this.message = message;
    this.name = "ValidationError";
    this.inputName = inputName;
    this.value = value;
  }
}




// // When a message is passed in:
// const passwordInput = new ValidationError('Password', 'pass');
// // Field { inputName: 'Password', value: 'pass' }
// if (passwordInput.value === 'pass') {
//   throw new ValidationError('Insecure password');
// }
// // throws ValidationError: Insecure password

// // When a message is not passed in:
// const passwordInput2 = new ValidationError('Password', 10);
// // Field { inputName: 'Password', value: 10 }
// if (typeof passwordInput2.value !== 'string') {
//   throw new ValidationError();
// }
// // throws ValidationError: Invalid input


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
