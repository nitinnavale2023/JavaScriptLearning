var number = function(num1,num2){
    var result = num1>num2 ? "Yeas" : "No";
    console.log("First value is Greter than Second value is :",result);
}
number(10,-10);
number(800,899);
console.log("--------------------------------------------------------------------------------");

var evenOdd = function(value){
    var result = value%2 == 0 ? "True" : "False";
    console.log(`this vale ${value} is Even No:- ${result}`);
}
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);
console.log("--------------------------------------------------------------------------------");

function evenOdd1(value){
    var result = value.length;
    var finalResult = result%2== 0 ? "EVEN" : "ODD";
    console.log(`${value} word length is:-${result} and its no is :- ${finalResult}`);
}
evenOdd1("JavaScript");
evenOdd1("developer" );
evenOdd1("Google"    );