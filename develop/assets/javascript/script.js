

//values that will be used to generate the random password
var specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Write password to the #password input
function writePassword() {
	//----USER PROMPTS----//
	charCount = parseInt(prompt('How many characters would you like your password to be? Please select a number between 8 and 128.'));
	//check to see that a charCount number exists and determine if it is between 8 and 128
		if (!charCount){
			alert("Please enter a valid number between 8 and 128 if you would like to continue...");
			//return writePassword();
		}else if (charCount < 8 || charCount > 128) {
			alert("Please enter a valid number between 8 and 128");
			return writePassword();
		}else {
			upperCase = confirm("Please click 'OK' if you would like to have 'UPPER CASE' letters in your generated password.");
			lowerCase = confirm("Please click 'OK' if you would like to have 'lower case' letters in your generated password.");
			specChar = confirm("Please click 'OK' if you would like to have special characters in your generated password.");
			numbers = confirm("Please click 'OK' if you would like to have numbers in your generated password.");

			//check to see what values are being logged
			console.log(charCount, upperCase, lowerCase, specChar, numbers);
		};

		//----CRITERIA CHECK----//
		//the requirment is that at least one critera be selected in order to generate a password
		if (!upperCase && !lowerCase && !specChar && !numbers){
			passwordCriteria = alert("Please select at least one criteria...");
			return writePassword(); //TODO: this could affect workflow negatively by sending the user back to the begining, work on adjusting this later
		}

	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

//------------ASSIGN USER INPUT VARIABLES----------------//
//values that will be defiend by the end user
//created outside of a function so they can be called by other functions(global variables)
var charCount;
var upperCase;
var lowerCase;
var specChar;
var numbers;

var passwordCriteria;

//------------CALL THE FUNCTION----------------//
//when the button is clicked, call the writePassword function
generateBtn.addEventListener('click', writePassword);


