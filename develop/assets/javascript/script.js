
//---WRITE THE PASSWORD CRITERIA----//
function writePassword() {
	pwd.reset();
	//we need to gather the critera for the password in order to generate one
	charCount = parseInt(prompt('How many characters would you like your password to be? Please select a number between 8 and 128.'));
	//check to see that a charCount number exists and determine if it is between 8 and 128
		if (!charCount){
			alert("Please enter a valid number between 8 and 128 if you would like to continue...");
			//return writePassword();
		}else if (charCount < 8 || charCount > 128) {
			alert("Please enter a valid number between 8 and 128");
			return writePassword();
		}else {
			pwd.upperCase = confirm("Please click 'OK' if you would like to have 'UPPER CASE' letters in your generated password.");
			pwd.lowerCase = confirm("Please click 'OK' if you would like to have 'lower case' letters in your generated password.");
			pwd.numbers = confirm("Please click 'OK' if you would like to have numbers in your generated password.");
			pwd.specChar = confirm("Please click 'OK' if you would like to have special characters in your generated password.");
			
			//check to see what values are being logged
			console.log(charCount, pwd.upperCase, pwd.lowerCase, pwd.specChar, pwd.numbers);
		};

		//----CRITERIA CHECK----//
		//the requirment is that at least one critera be selected in order to generate a password
		if (!pwd.upperCase && !pwd.lowerCase && !pwd.specChar && !pwd.numbers){
			newPassword = alert("Please select at least one criteria...");
			return writePassword(); //TODO: this could affect workflow negatively by sending the user back to the begining, work on adjusting this later
		}
		
	//----GENERATE THE PASSWORD----//
	function generatePassword () {
		if (pwd.upperCase === true && pwd.lowerCase === true && pwd.numbers === true && pwd.specChar === true){
			//execute for loop here for whatever length the end user determines will be thier pasword
			for (i = 0; i < charCount; i++){
				var char = Math.floor(Math.random() * options.all.length);
				compiled += options.all.charAt(char);
				console.log(compiled);
			}
		}

	}

	var compiled = generatePassword();
	var passwordText = document.querySelector(compiled);

	passwordText.value = compiled;
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

//------------ASSIGN USER INPUT VARIABLES----------------//
//values that will be defiend by the end user
//created outside of a function so they can be called by other functions(global variables)
var charCount;
var pwd = {
	upperCase: true,
	lowerCase: true,
	numbers: true,
	specChar: true,
	reset: function(){
		this.upperCase = true;
		this.lowerCase = true;
		this.specChar = true;
		this.numbers = true;
	}
}

//values that will be used to generate the random password
var specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var compiled = "";

//variables that outline all possibilites for adding together characters based on user input
var options ={
	all: specials + charactersLower + charactersUpper + numbers,
	slu: specials + charactersLower + charactersUpper,
	sln: specials + charactersLower + numbers,
	sun: specials + charactersUpper + numbers,
	lun: charactersLower + charactersUpper + numbers,
	sl: specials + charactersLower,
	su: specials + charactersUpper,
	sn: specials + numbers,
	lu: charactersLower + charactersUpper,
	ln: charactersLower + numbers,
	un: charactersUpper + numbers,
}


//------------CALL THE FUNCTION----------------//
//when the button is clicked, call the writePassword function
generateBtn.addEventListener('click', writePassword);


