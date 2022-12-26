

const fruits_seasonal =["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`------------Given array is--------------`);
console.log(fruits_seasonal);


   console.log(`\n-------(1) First and Last element-----------------`);
let lastelement = fruits_seasonal.length;
console.log( `First element is :- ${fruits_seasonal[0]}`);
console.log(`Last element is :- ${fruits_seasonal[lastelement-1]}`);

console.log(`\n----------(2) Add element Papaya before the Banana---------`);
fruits_seasonal.splice(0, 0, "Papaya");
console.log(fruits_seasonal);

console.log(`\n----------(3) Remove Mango from the array---------`);
fruits_seasonal.splice(4,1);
console.log( fruits_seasonal);

console.log(`\n----------(4) Insert element Pineapple at last position---------`);
fruits_seasonal.splice(5, 0, 'Pineapple');
console.log(fruits_seasonal);

console.log(`\n----------(5) inser element- Dragon Fruit before Eater Melon---------`);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log( fruits_seasonal);

console.log(`\n----------(6) Replace an element Orange with Kiwi ---------`);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log( fruits_seasonal);

console.log(`\n---------(7) strting from index 1 to 4 ---------`);
let result = fruits_seasonal.slice(1,5);
console.log( result);

console.log(`\n---------(8)Only select last 3 elements------------------`);
let findLastThirdIndex=fruits_seasonal.length-3;
console.log(fruits_seasonal.slice(findLastThirdIndex));
