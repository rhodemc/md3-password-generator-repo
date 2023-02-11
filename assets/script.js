// Defining variables

var numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var specialCharArr = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];
var characterLength = 8;
var choiceChar = [];

var charMin = 8;
var charMax = 128;

// Selecting Generate Button
var generateBtn = document.querySelector("#generate");

// Specifying that once the Generate Button is clicked, it will begin the writePassword function
generateBtn.addEventListener("click", writeNewPassword);

// Using writeNewPassword function to write password to the #password input
function writeNewPassword() {
  var choiceTrue = generateChoiceArr();
  var newPasswordText = document.querySelector("#password");
  if (choiceTrue) {
    var newPassword = generateNewPassword();
    newPasswordText.value = newPassword;
  } else {
    newPasswordText.value = "";
  }
};

// First function that runs in the writeNewPassword function -- generates choiceChar array based on user's length and character specifications
function generateChoiceArr() {

  choiceChar = [];

  characterLength = parseInt(window.prompt("Please enter a password length between 8 and 128."));
  if (!(charMin <= characterLength && characterLength <= charMax)) {
    alert('Length must be between 8 and 128 and must be a number. Please try again.');
    return false;
  };
  var isNumber = window.confirm("Do you want to include numbers in your password?");
  if (isNumber === true) {
    choiceChar = choiceChar.concat(numbersArr);
  };
  var isLowerCase = window.confirm("Do you want to include lowercase letters in your password?");
  if (isLowerCase === true) {
    choiceChar = choiceChar.concat(lowerCaseArr);
  };
  var isUpperCase = window.confirm("Do you want to include uppercase letters in your password?");
  if (isUpperCase === true) {
    choiceChar = choiceChar.concat(upperCaseArr);
  }
  var isSpecialChar = window.confirm("Do you want to include special characters in your password?");
  if (isSpecialChar === true) {
    choiceChar = choiceChar.concat(specialCharArr);
  };
  if (isNumber === false && isLowerCase === false && isUpperCase === false && isSpecialChar === false) {
    alert('Please select at least one parameter.');
    return false;
  };
  return true;
};

/* In the writeNewPassword function, once generateChoiceArr returns true, generateNewPassword will 
produce a random password based on the user's choiceChar array */
function generateNewPassword() {
  var randomPassword = "";
  for (var i = 0; i <= characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceChar.length);
    randomPassword = randomPassword + choiceChar[randomIndex];
  }
  return randomPassword;
};

