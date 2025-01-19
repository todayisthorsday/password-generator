// index of characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// get element ids & assign new variable name
let passOne = document.getElementById("pass1");
let passTwo = document.getElementById("pass2");

let copyBtn = document.getElementById('copy-btn');

// generate passwords function
function generate() {
let passwordString = "";
let passwordString2 = "";
    for (let i = 0; i < 15; i++) { // loops through index 15 times
        let index = Math.floor(Math.random() * characters.length); // gets random number from index
        passwordString += characters[index]; // changes index numbers to the content strings instead
    }
    passOne.textContent = passwordString; // replaces blank space with generated password

    for (let i = 0; i < 15; i++) { // loops through index 15 times
        let index = Math.floor(Math.random() * characters.length); // gets random number from index
        passwordString2 += characters[index]; // changes index numbers to the content strings instead
    }
    passTwo.textContent = passwordString2; // replaces blank space with generated password
}

// clear generated passwords
function clearPass() {
    passOne.textContent = "";
    passTwo.textContent = "";
}

//copy passwords
function copyPass1() {
    let password = passOne.textContent; 
    if (password) {
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(password).then(function() {
            alert("Password copied to clipboard!"); // Notify the user
        }).catch(function(err) {
            alert("Failed to copy text: " + err);
        });
    } else {
        alert("No password to copy.");
    }
}
    function copyPass2() {
    let password2 = passTwo.textContent; 
    if (password2) {
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(password2).then(function() {
            alert("Password copied to clipboard!"); // Notify the user
        }).catch(function(err) {
            alert("Failed to copy text: " + err);
        });
    } else {
        alert("No password to copy.");
    }
    }
