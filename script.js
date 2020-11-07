var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //variables for uppercase,lowercase,special, numbers
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "@#$%&*+-";
  var numberOps = "1234567890";

  //prompts, confirms etc to get the users criteria for the password
  var lengthRequested = parseInt(
    prompt("How long would you like the password?")
  );

  if (lengthRequested < 8 || lengthRequested > 128) {
    alert("Length must be more than 8 but less than 128");
  }

  var userWantsUppCase = confirm("Do you want Upper Case Letters?");
  var userWantsLowerCase = confirm("Do you want Lower Case Letters?");
  var userWantsSpecial = confirm("Do you want Special Characters?");
  var userWantsNumber = confirm("Do you want Numbers?");

  //prompts to generate a password from the variables declared
  if (
    !userWantsUppCase &&
    !userWantsLowerCase &&
    !userWantsSpecial &&
    !userWantsNumber
  ) {
    alert("Select at least one type of character");
  }

  var password = "";

  var passwordFillerOptions = "";

  //If statement generating random charactars from each variable
  if (userWantsUppCase) {
    var randomUpperCaseIndex =
      upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    password += randomUpperCaseIndex;

    passwordFillerOptions += upperCaseChar;
  }

  if (lowerCaseChar) {
    var randomLowerCaseIndex =
      lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    password += randomLowerCaseIndex;

    passwordFillerOptions += lowerCaseChar;
  }

  if (userWantsSpecial) {
    var randomSpecialCharIndex =
      specialChar[Math.floor(Math.random() * specialChar.length)];
    password += randomSpecialCharIndex;

    passwordFillerOptions += specialChar;
  }

  if (userWantsNumber) {
    var randomNumberIndex =
      numberOps[Math.floor(Math.random() * numberOps.length)];
    password += randomNumberIndex;

    passwordFillerOptions += numberOps;
  }

  //looping over to make sure the length of the password created is the length requested
  for (var i = 0; i < lengthRequested; i++) {
    if (password.length < lengthRequested) {
      var anyCharacter =
        passwordFillerOptions[
          Math.floor(Math.random() * passwordFillerOptions.length)
        ];
      password += anyCharacter;
    }
  }

  //return string password
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener to generate button

generateBtn.addEventListener("click", writePassword);
