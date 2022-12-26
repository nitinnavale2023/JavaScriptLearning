const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`\n=================Given array is================`);
console.log(arrayNumbers);
console.log(`----------------------------------------------------------------------------------------------`);

let totalElement = arrayNumbers.length;
console.log(` (1) total elements available in array is :- "${totalElement}"`);
console.log(`----------------------------------------------------------------------------------------------`);

console.log(` (2) First element of array :- "${arrayNumbers[0]}" Last element is :- "${arrayNumbers[totalElement-1]}" `);
console.log(`---------------------------------------------------------------------------------------------------------`);

console.log(" (3) last third element is :-",arrayNumbers[arrayNumbers.length-3] );
console.log(`----------------------------------------------------------------------------------------------`);

let evenNumber = " " ;
for (const element of arrayNumbers) {
    if(element%2==0){
        evenNumber=evenNumber.concat("  ",element);
    }
}
console.log(` (4) even number of array is :-${evenNumber}`);
console.log(`----------------------------------------------------------------------------------------------`);


let oddNumber = " " ;
for (const element of arrayNumbers) {
    if(element%2!==0){
        oddNumber=oddNumber.concat("  ",element);
    }
}
console.log(` (5) odd number of array is :-${oddNumber}`);
console.log(`----------------------------------------------------------------------------------------------`);

let evenPosition = " ";
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2==0){
        evenPosition=evenPosition.concat(" ",arrayNumbers[index]);
    }
}
console.log(` (6) even positionde elements are :-${evenPosition}`);
console.log(`----------------------------------------------------------------------------------------------`);

let oddPosition = " ";
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2!==0){
        oddPosition=oddPosition.concat(" ",arrayNumbers[index]);
    }
}
console.log(` (7) Odd positionde elements are :-${oddPosition}`);
console.log(`----------------------------------------------------------------------------------------------`);

let sumOfNumbers =0;
for (const element of arrayNumbers) {
    sumOfNumbers = sumOfNumbers + element;
}
console.log(` (8) Sum of all elements form array :-${sumOfNumbers}`);
console.log(`----------------------------------------------------------------------------------------------`);

let multipleOfNumbers =" ";
for (const element of arrayNumbers) {
    if(element%5==0){
        multipleOfNumbers =  multipleOfNumbers.concat(" ",element);
    }
    }
    console.log(` (9) Numbers which are multiple of 5 is :- ${multipleOfNumbers}`);
    console.log(`----------------------------------------------------------------------------------------------`);

    let available = arrayNumbers.includes(115);
    console.log(`(10) Available number 115 is :-${available}`);
    console.log(`----------------------------------------------------------------------------------------------`);

    let availablenumber = arrayNumbers.includes(23);
    console.log(`(11) Available number 23 is :-${availablenumber}`);
    console.log(`----------------------------------------------------------------------------------------------`);

console.log(`(12) Befor adding 55,66 Before index is:-${arrayNumbers}`);
    let insert = arrayNumbers.splice(3,0,55,66);
    console.log(`After adding number 55,66 before index 3 is:-${arrayNumbers}`);
    console.log(`----------------------------------------------------------------------------------------------`);

console.log(`(13) Before Delet 3 Starting element is:- ${arrayNumbers}`);
    let deleteElements = arrayNumbers.slice(4);
     console.log(`After Delete 3 Starting From index 4 :-${deleteElements}`);
