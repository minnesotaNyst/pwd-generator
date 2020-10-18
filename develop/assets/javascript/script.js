
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
			pwd.specChar = confirm("Please click 'OK' if you would like to have special characters (#, %, *, $, @, etc.) in your generated password.");
			
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
	var password = function generatePassword () {
		if (pwd.specChar === true && pwd.lowerCase === true && pwd.upperCase === true && pwd.numChar === true){
			compiledChar = options.all;

		} else if (pwd.specChar === true && pwd.lowerCase === true && pwd.upperCase === true){
			compiledChar = options.slu;

		} else if (pwd.specChar === true && pwd.lowerCase === true && pwd.numChar === true){
			compiledChar = options.sln;

		} else if (pwd.specChar === true && pwd.upperCase === true && pwd.numChar === true){
			compiledChar = options.sun;

		} else if (pwd.lowerCase === true && pwd.upperCase === true && pwd.numChar === true){
			compiledChar = options.lun;

		} else if (pwd.specChar === true && pwd.lowerCase === true){
			compiledChar = options.sl;

		} else if (pwd.specChar === true && pwd.upperCase === true){
			compiledChar = options.su;

		} else if (pwd.specChar === true && pwd.numChar === true){
			compiledChar = options.sn;

		} else if (pwd.lowerCase === true && pwd.upperCase === true){
			compiledChar = options.lu;

		} else if (pwd.lowerCase === true && pwd.numChar === true){
			compiledChar = options.ln;

		} else if (pwd.upperCase === true && pwd.numChar === true){
			compiledChar = options.un;

		} else if (pwd.upperCase === true){
			compiledChar = charactersUpper;

		} else if (pwd.lowerCase === true){
			compiledChar = charactersLower;

		} else if (pwd.numChar === true){
			compiledChar = numChar;

		} else if (pwd.specChar === true){
			compiledChar = specials;
		};

		for (i = 0; i < charCount; i++){
			var char = compiledChar[Math.floor(Math.random() * compiledChar.length)];
			passwordArray.push(char);
		
	
			//store the password as an array
			var passwordArray = [];
				console.log(passwordArray);
		}
		
		//need to convert the stored array to a string
		var password = passwordArray.join('');
		
		var passwordText = document.querySelector("#password");

		passwordText.value = password;
		
	}
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
var specials = ".'):~;!-#%*$@=>[(&{}<?]^+/";
var charactersLower = "abcdefghijklmnopqrstuvwxyz";
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "1234567890";

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


