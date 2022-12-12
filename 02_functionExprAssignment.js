var square = function(num){
    console.log("Square Of No is :", num ,"=" ,num * num);
  

}
square(5);
square(6);
square(25);
square(100);
console.log("....................................................................................................");
var variableName = function(){
  
}
console.log("Type of function Name is :",typeof variableName);

console.log("....................................................................................................");
var rectangle = function(length,width){
    console.log("Area of Rectangle :",length*width);
}
rectangle(499,917);
console.log("....................................................................................................");
var swapValues = function(value1,value2){
    console.log("Before Swap Value :", value1,value2);
    var temp;
    temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap Value :",value1,value2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("....................................................................................................");
var javaScript = "JS the most popular language";
console.log("Given String is the :",javaScript);
console.log("Total Character is :", javaScript.length);
console.log(" Character at index 6 is :", javaScript.charAt(6));
console.log(" Character at index 11 is :", javaScript.charAt(11));
var lengthName = javaScript.length;
console.log("Last Character String is :", javaScript.charAt(lengthName-1));
console.log("First Character String is :", javaScript.charAt(0));
console.log("Length of the Given String is the:",javaScript.length,"Calculet the Square of the length :",lengthName*lengthName);


