// Assignment code here


const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "@", "#","$", "%", "^", "&", "*", "(", ")", "_", "+", "-", 
"=", "[", "]","{", "}", ";", ":", ",", ".", "<", ">", "?", '"', "'", " ", '`'];


function generatePassword() {

//gathers password criteria from user  
let lowercase = confirm("Would you like your password to contain lowercase characters?");
let uppercase = confirm("Would you like your password to contain UPPERCASE characters?");
let numeric = confirm("Would you like your password to contain numeric characters?");
let special = confirm("Would you like your password to contain special characters?");


//check to determine user has at least 1 criteria selected
while(!lowercase && !uppercase && !numeric && !special) {
  alert("Please select at least 1 password criteria");
  lowercase = confirm("Would you like your password to contain lowercase characters?");
  uppercase = confirm("Would you like your password to contain UPPERCASE characters?");
  numeric = confirm("Would you like your password to contain numeric characters?");
  special = confirm("Would you like your password to contain special characters?");
}

//gathers password length from user
let passLength = prompt("How long would you like your password to be?\n\nPlease enter a number between 8-128:");

//check to see if password length is within 8-128
while (isNaN(passLength) || passLength < 8 || passLength > 128) {
  alert("INVALID!\nEnter a number between 8-128");
  passLength = prompt("How long would you like your password to be?\n\nPlease enter a number between 8-128:");
  console.log(passLength);
}

//creates array based on user's selected password criteria
let selectChar = [];

if (lowercase) {
  selectChar = selectChar.concat(lowerChar);
}
if (uppercase) {
  selectChar = selectChar.concat(upperChar);
}
if (numeric) {
  selectChar = selectChar.concat(numericChar);
}

if (special) {
  selectChar = selectChar.concat(specialChar);
}


//creates password
let newPass = '';

for (let i = 0; i < passLength; i++) {
  newPass += selectChar[Math.floor(Math.random() * selectChar.length)];
}
console.log(newPass);

return newPass;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
