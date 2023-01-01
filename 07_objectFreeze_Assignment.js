
const personalDetails = {
    name : "Nitin",
    mobileNo : 8888557240,
    age : 28,
    city : "Sangola",
}
console.log("1) createing objesct  Persnol Details is :-");
console.log( personalDetails);
console.log("=====================================================================================");
const collegeDetails = {
    collegeName : "Sangola college Sangola ",
    collegeID : 1952,
    principle : "Krushna Ingole"
}
console.log("2) createing objesct College Details  is :-");
console.log( collegeDetails);
console.log("=====================================================================================");
// Merging method
console.log("3) Merge object is :-");
Object.assign(personalDetails, collegeDetails);
console.log( personalDetails);
console.log("=====================================================================================");

let friendlist = ["Akshay", "Pandurang", "Onkar", "Bharat", "Ganesh"];
console.log("4) crteate an Freeze Array is:-");
Object.freeze(friendlist);
console.log(friendlist);
console.log("=====================================================================================");

console.log("5) step 4 array using for of loop is:");
for (const element  of friendlist) {
     console.log(element);
}
console.log("=====================================================================================");

let company = "Codemind Technology";

var emptyString = "";

for (var index =company.length-1; index>=9; index--){
    emptyString += company[index];
    
}
//console.log(emptyString);
let sliceNo = company.slice(0,8);
//console.log(sliceNo);
console.log(`6) Given String is : "${company}"`);
console.log(`Reverse String is: "${sliceNo} ${emptyString}"`);


