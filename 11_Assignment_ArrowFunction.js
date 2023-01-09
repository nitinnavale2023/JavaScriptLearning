
console.log(`1) Arrow function no argument no return value...`);
let arrowfun = ()=> {
    console.log("---->  Good Morning, Today is Monday");

}
arrowfun();
console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`2)-a)   3 argument and no return value....`);
let multiplay = (num1, num2, num3) => {
    const multiplyResult = num1*num2*num3;
    console.log(" ----> multiplay by 5, 5, 2 is :- ",multiplyResult );
}
multiplay(5, 5, 2);

//console.log("\n");
console.log(`2)-b)   3 argument and no return value, one Default argument.... `);
let multiplayDifaultValue = (num1, num2, num3=1) => {
    const multiplyResult = num1*num2*num3;
    console.log(" ----> multiplay by 10, 4 and argument 3rd is Default value is 1  :- ",multiplyResult );
}
multiplayDifaultValue(10, 4);
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`3)  5 argument and return value...`);
let add = (num1, num2, num3, num4, num5) => {
    let addrusult = (num1 + num2 + num3 + num4 + num5);
    return addrusult;
}
var finalResult = add(100, 100, 200, 349, 756);
console.log("3)-a)---> Addition of 100,100,200,349,756 is :",finalResult);

var finalResult = add("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`3)-c)---> Addition of "I am", "learning", "ES6", "features", "in depth"  is :- ${finalResult}`);


