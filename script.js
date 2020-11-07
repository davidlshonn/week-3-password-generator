var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //variables for uppercase,lowercase,special, numbers
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "@#$%&*+-";

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

  //prompts to generate a password from the variables declared
  if (!userWantsUppCase && !userWantsLowerCase && !userWantsSpecial) {
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
    var randomSpecialChar =
      specialChar[Math.floor(Math.random() * specialChar.length)];
    password += randomSpecialChar;

    passwordFillerOptions += specialChar;
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
