var text = prompt("What is your name?");
var firstChar = text.slice(0, 1);
var firstCharToUpperCase = firstChar.toUpperCase();
var remaininCharacters = text.slice(1, text.length); 
var remaininCharactersToLowerCase = remaininCharacters.toLowerCase();
var actualName = firstCharToUpperCase + remaininCharactersToLowerCase;

alert("Hello, " + actualName + ".");






