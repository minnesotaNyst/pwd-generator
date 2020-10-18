var generateBtn = document.querySelector('#generate');
var copyBtn = document.querySelector("#copy")

//----ASSIGN USER INPUT VARIABLES----//
var charCount;
var compiledChar;
var newPassword = "";
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

//----PASSWORD CHARACTER POSSIBILITIES----//
var specials = ".'):~;!-#%*$@=>[(&{}<?]^+/";
var charactersLower = "abcdefghijklmnopqrstuvwxyz";
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "1234567890";

//----GET THE PASSWORD CRITERIA----//
function generatePassword() {
	//create a reset so the end user does not get caught in an infinite loop
	pwd.reset();
	let newPassword = "";
	//gather the critera for the password in order to generate one
	charCount = parseInt(prompt('How many characters would you like your password to be? Please select a number between 8 and 128.'));
	//check to see that a charCount number exists and determine if it is between 8 and 128
		if (!charCount){
			alert("Please enter a valid number between 8 and 128 if you would like to continue...");
		}else if (charCount < 8 || charCount > 128) {
			alert("Please enter a valid number between 8 and 128");
			generatePassword();
		//if a valid number exists, then run through the rest of the prompts to gather user criteria
		}else {
			pwd.upperCase = confirm("Please click 'OK' if you would like to have 'UPPER CASE' letters in your generated password.");
			pwd.lowerCase = confirm("Please click 'OK' if you would like to have 'lower case' letters in your generated password.");
			pwd.numChar = confirm("Please click 'OK' if you would like to have numbers in your generated password.");
			pwd.specChar = confirm("Please click 'OK' if you would like to have special characters (#, %, *, $, @, etc.) in your generated password.");
		};

		//----CRITERIA CHECK----//
		if (!pwd.upperCase && !pwd.lowerCase && !pwd.specChar && !pwd.numChar){
			alert("Please select at least one criteria...");
			generatePassword();
		}
		if(pwd.upperCase === true){
			compiledChar += charactersUpper;
		}
		if(pwd.lowerCase === true){
			compiledChar += charactersLower;
		}
		if(pwd.numChar === true){
			compiledChar += numChar;
		}
		if(pwd.specChar === true){
			compiledChar += specials;
		}

		//----GENERATE THE PASSWORD----//
		for (i = 0; i < charCount; i++){
		var char = Math.floor(Math.random() * compiledChar.length);
		newPassword += compiledChar.charAt(char, char +1);
		}
		return newPassword;
}

// Write password to the text box
function writePassword() {
	let newPassword = generatePassword();
	var passwordText = document.querySelector("#password");
  
	passwordText.value = newPassword;
}  

//copy to clipboard function
function copyClip() {
	let newPassword = document.querySelector("#password");
	newPassword.select();
	document.execCommand("copy");
}

// Add event listener to generate and copy button
generateBtn.addEventListener('click', writePassword);
copyBtn.addEventListener('click', copyClip);


