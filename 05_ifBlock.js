
console.log("=================If Block====================");

console.log(`Check Whether number is positive or Negative..`);
var myNumber = 10;
if(myNumber>0){
    console.log(`Given number ${myNumber} is Positive`);
}

var num = -4;
if (num<=0){
    console.log(` Given number ${num} is Negative`);
}

var num1 = 100;
var num2 = 250;
var num3 = 950;
if(num1>num2  && num1>num3){
    console.log(`you are greater man ${num1}`);
}
if(num2>num1 && num2>num3){
    console.log(`you are greater man ${num2}`);
}
if(num3>num1 && num3>num2){
    console.log(`you are greater man ${num3}`);
}

function evenOrOdd(vale){
    if(vale%2==0){
        return "Even";
    }
    if(vale%2!=0){
        return "Odd";
    }
}
evenOrOdd(45);
