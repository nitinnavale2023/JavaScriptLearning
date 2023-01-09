


const person = {
    name: "virat kohli",
    age: 24,
    city: "Pune",
    pinCode: 413304,
    totolRuns: 256412,
    isMarried: true
}

// let pinCode = person.pinCode;
// let totolRunsVirat =person.totolRuns;
// let cityVirat = person.city;
let {pinCode, totolRuns, city, wifeName="Anushka"} =person;  // Object Destructuring

console.log(pinCode,totolRuns,city, wifeName);
console.log(person);

console.log("Array Destructuring..........");
let arrayCoumpany = ["TCS", "Infy", "google", "Twitter", "Metaverse"];
let [coumpany1, coumpany2, mad] = arrayCoumpany;
console.log(coumpany1, coumpany2, mad);


console.log(`Self Invoking Function or IIFE-- Immediately Invoked Function Expression`);

(function show(){
    console.log("Bhar bhar ke likho");
})();