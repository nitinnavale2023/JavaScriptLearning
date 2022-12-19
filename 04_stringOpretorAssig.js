

function squareOfWordLength(value) {
  
   var wordLength = value.length;
   var result = wordLength*wordLength;
 
 console.log(`lengt of word ${value} is :- ${wordLength}, And its squre is :- ${result}`);


} 

squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log("----------------------------------------------------------------------------------------------------------");


var developer = "I am Angular Developer";
var devLength = developer.length;
var word = developer.split(" ");
console.log("Total length in String is:-",devLength);
console.log(" Total No of Word is:-",word);
console.log("Divided by length and number of Words :-",devLength/4);
console.log("Multiply by length and number of Words :-",devLength*4);

