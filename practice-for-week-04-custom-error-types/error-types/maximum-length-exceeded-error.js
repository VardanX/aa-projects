const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength){
    // Set the message based on whether excessLength is provided
    const message =
      excessLength !== undefined
        ? `Maximum length exceeded by ${excessLength}`
        : "Maximum length exceeded";

    // Call parent constructor with the message
    super(message);
    // Set the name property
    this.name = "MaximumLengthExceededError";
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
