//changing cases

var allLower = userInput.toLowerCase();

var x = "Hello World";
x = x.toLowerCase();

var y = "hello world";
y = y.toUpperCase();

var originalVariable = "Hello World";
var newVariable = originalVariable.toLowerCase();


var myArray = ["Hello", "World"];
var newVariable = myArray[0].toLowerCase();

var myString = "hello world";
alert(myString.toUpperCase());




//strings ka code

var sameWords = "captain";
var slicedResult = sameWords.slice(2, 5); 
console.log(slicedResult);

var sameWords = "captain";
var numberOfCharacters = sameWords.length;
console.log(numberOfCharacters);

var animal = "elephant";
var seg = animal.slice(1, 5);
console.log(seg);



// Rounding numberss

var originalNumber = 9.8;
var roundedNumber = Math.round(originalNumber);
console.log(roundedNumber);

var origNum = 2.2;
var roundNum = Math.ceil(origNum);
console.log(roundNum);

var origNum = 6.9;
var roundNum = Math.floor(origNum);
console.log(roundNum);

var originalNumber = 9.6;
var roundedNumber = Math.round(originalNumber);
console.log(roundedNumber);

var originalNumber = 0.5;
var roundedNumber = Math.round(originalNumber);
console.log(roundedNumber);

// random nyumbers

var randomNum = Math.floor(Math.random() * 50) + 1;
console.log(randomNum);

// print srtrings
var myString = "123";
var myInteger = parseInt(myString, 10);
console.log(myInteger);

function stringToInteger(inputString)
{
       return parseInt(inputString, 10);
}


var myNumber = 123;
var myString = String(myNumber);
console.log(myString); 

function numberToString() 
{
    var myNumber = 62;
    var myString = String(myNumber);
    return myString;
}


var myVariable = "Option2";
switch (myVariable) 
{
  case "Option1":
    console.log("Performing action1111");
    break;
  
  case "Option2":
    console.log("Performing action22");
    break;

  default:
    console.log("actionother options");
}



var cityName = prompt("Enter a city name:");

switch (cityName.toLowerCase()) {
  case "paris":
    alert("You entered Paris!");
    break;

  case "tokyo":
    alert("You Entered Tokyo!");
    break;
    default:

    
    alert("City no found");
}
