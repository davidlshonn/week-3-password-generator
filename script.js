
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 //variables for uppercase,lowercase,special, numbers
 var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";

 //prompts, confirms etc to get the users criteria for the password
var lengthRequested = parseInt(prompt('How long would you like the password?'));

if (lengthRequested < 8 || lengthRequested > 128){
    alert('Length must be more than 8 but less than 218')
}

var userWantsUppCase = confirm('Do you want Upper Case Letters?');
var userWantsLowerCase = confirm('Do you want Lower Case Letters?');


 //use those prompts to generate a password from the variables you declared at the top
    if (!userWantsUppCase && !userWantsLowerCase){
        alert('Select at least one type of character');
    }

    var password = '';

    if(userWantsUppCase){
        var randomUpperCaseIndex = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
        password += randomUpperCaseIndex;
    }








 //return string password
return password ;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);