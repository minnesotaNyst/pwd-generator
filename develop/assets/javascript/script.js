//User prompts that need to happen when the "generate password button is clicked"
var promptCriteria = function () {
	var charCount = prompt('How many characters would you like your pwd to be?');
	var upperCase = confirm(
		"Please click 'OK' if you would like to have UPPER 'CASE letters' in your generated password."
	);
	var lowerCase = confirm(
		"Please click 'OK' if you would like to have 'lower case' letters in your generated password."
	);
	var specChar = confirm(
		"Please click 'OK' if you would like to have special characters in your generated password."
	);
	var numbers = confirm(
		"Please click 'OK' if you would like to have numbers in your generated password."
	);
	console.log(charCount, upperCase, lowerCase, specChar, numbers);
};

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

var criteria = {
	upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	lower: 'abcdefghijklmnopqrstuvwxyz',
	special: '!@#$%^&*()',
	number: '1234567890'
};
