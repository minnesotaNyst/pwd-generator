
//---WRITE THE PASSWORD CRITERIA----//
function writePassword() {
	//create a reset so the end user does not get caught in an infinite loop
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
			pwd.numChar = confirm("Please click 'OK' if you would like to have numbers in your generated password.");
			pwd.specChar = confirm("Please click 'OK' if you would like to have special characters in your generated password.");
			
			//check to see what values are being logged
			console.log(charCount, pwd.upperCase, pwd.lowerCase, pwd.specChar, pwd.numChar);
		};

		//----CRITERIA CHECK----//
		//the requirment is that at least one critera be selected in order to generate a password
		if (!pwd.upperCase && !pwd.lowerCase && !pwd.specChar && !pwd.numChar){
			alert("Please select at least one criteria...");
			return writePassword(); //TODO: this could affect workflow negatively by sending the user back to the begining, work on adjusting this later
		}
		
	//----GENERATE THE PASSWORD----//
	function generatePassword () {
		if (pwd.specChar === true && pwd.lowerCase === true && pwd.upperCase === true && pwd.numChar === true){
			compiledChar = options.all;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.all);
		} else if (pwd.specChar === true && pwd.lowerCase === true && pwd.upperCase === true){
			compiledChar = options.slu;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.slu);
		} else if (pwd.specChar === true && pwd.lowerCase === true && pwd.numChar === true){
			compiledChar = options.sln;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.sln);
		} else if (pwd.specChar === true && pwd.upperCase === true && pwd.numChar === true){
			compiledChar = options.sun;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.sun);
		} else if (pwd.lowerCase === true && pwd.upperCase === true && pwd.numChar === true){
			compiledChar = options.lun;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.lun);
		} else if (pwd.specChar === true && pwd.lowerCase === true){
			compiledChar = options.sl;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.sl);
		} else if (pwd.specChar === true && pwd.upperCase === true){
			compiledChar = options.su;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.su);
		} else if (pwd.specChar === true && pwd.numChar === true){
			compiledChar = options.sn;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
		} else if (pwd.lowerCase === true && pwd.upperCase === true){
			compiledChar = options.lu;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.lu);
		} else if (pwd.lowerCase === true && pwd.numChar === true){
			compiledChar = options.ln;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.ln);
		} else if (pwd.upperCase === true && pwd.numChar === true){
			compiledChar = options.un;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(options.un);
		} else if (pwd.upperCase === true){
			compiledChar = charactersUpper;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(charactersUpper);
		} else if (pwd.lowerCase === true){
			compiledChar = charactersLower;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(charactersLower);
		} else if (pwd.numChar === true){
			compiledChar = numChar;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(numChar);
		} else if (pwd.specChar){
			compiledChar = specials;
			//REMOVE: logging the options to make sure program is running correctly, remove once ready for production
			//console.log(specials);
		};

		for (i = 0; i < charCount; i++){
			var char = compiledChar[Math.floor(Math.random() * compiledChar.length)];
			passwordHolder.push(char);
		}
	}
	
	var passwordHolder = [];
		console.log(passwordHolder);
	var newPassword = generatePassword();
	var passwordText = document.querySelector();
	passwordText.value = newPassword;
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
	numChar: true,
	specChar: true,
	reset: function(){
		this.upperCase = true;
		this.lowerCase = true;
		this.specChar = true;
		this.numChar = true;
	}
}

//values that will be used to generate the random password
var specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//variables that outline all possibilites for adding together characters based on user input
var options ={
	all: specials + charactersLower + charactersUpper + numChar,
	slu: specials + charactersLower + charactersUpper,
	sln: specials + charactersLower + numChar,
	sun: specials + charactersUpper + numChar,
	lun: charactersLower + charactersUpper + numChar,
	sl: specials + charactersLower,
	su: specials + charactersUpper,
	sn: specials + numChar,
	lu: charactersLower + charactersUpper,
	ln: charactersLower + numChar,
	un: charactersUpper + numChar,
}


//------------CALL THE FUNCTION----------------//
//when the button is clicked, call the writePassword function
generateBtn.addEventListener('click', writePassword);


