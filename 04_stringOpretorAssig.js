function squareOfWordLength(value1, value2,value3) {
  var wordLength = value1.length;
 var result = wordLength*wordLength;
 console.log("lengt of word JavaScript is:-",wordLength ,"And its square is:-", result);

 var wordLength = value2.length;
 var result = wordLength*wordLength;
 console.log("lengt of word Google Chrome is:-",wordLength ,"And its square is:-", result);

 var wordLength = value3.length;
 var result = wordLength*wordLength;
 console.log("lengt of word Developer Smart is:-",wordLength ,"And its square is:-", result);
   
   
   //return result;
} 

squareOfWordLength ("JavaScript","Google Chrome","Developer Smart");

console.log("----------------------------------------------------------------------------------------------------------");


var developer = "I am Angular Developer";
var devLength = developer.length;
var word = developer.split(" ");
console.log("Total length in String is:-",devLength);
console.log(" Total No of Word is:-",word);
console.log("Divided by length and number of Words :-",devLength/4);
console.log("Multiply by length and number of Words :-",devLength*4);


