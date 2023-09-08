var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChar = "0123456789"
var specialChar = "!@#$%&?"

// Assignment Code
var generateBtn = document.querySelector("#generate")

function generatePassword(){
  function getPasswordLength() {
    var passwordLength;
    do {
      var passwordLengthStr = prompt("How many characters for this password?")
      passwordLength = Number(passwordLengthStr)
    } while (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128)
    return passwordLength
  }
  
  // Password length & stores input
  var passwordLength = getPasswordLength()

  var confirmLowercase = confirm("Should the password include lowercase letters?")
  var confirmUppercase = confirm("What about uppercase letters?")
  var confirmNumbers = confirm("Should it have numbers?")
  var confirmSpecialChar = confirm("What about any special characters?")

  // Generates password based on specific criteria
  var charChoice = ""
  if (confirmLowercase) {
    charChoice += lowerCaseChar
  }else {
    confirmLowercase = false
  }
  if (confirmUppercase) {
    charChoice += upperCaseChar
  }else {
    confirmUppercase = false
  } 
  if (confirmNumbers) {
    charChoice += numberChar
  }else {
    confirmNumbers = false
  }
  if (confirmSpecialChar) {
    charChoice += specialChar
  }else {
    confirmSpecialChar = false
  }

  // Returns password with chosen criteria
  var password1 = ""
  for (var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * charChoice.length)
    password1 += charChoice.charAt(randomIndex)
  }

  return password1
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
