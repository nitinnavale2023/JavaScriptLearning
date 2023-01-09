

const fullName = "Sachin Tendulkar";
const age = 45;
const city = "Mumbai";

// Using Concat() method
let details ="Details " .concat(fullName).concat(" ").concat(age).concat(" ").concat(city);
console.log(details);

//  Using Plus + Operator
let detailsUsingPlus = "Details  " + fullName + " " + age + " " + city;
console.log(detailsUsingPlus);

// Using String Templete is ES6 
let detailsUsingStringTemplet = `Details ${fullName}  ${age}  ${city}`;
console.log(detailsUsingStringTemplet);