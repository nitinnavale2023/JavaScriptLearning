const car ={
    carName: "Creta SX",
    company: "Hundai",
    launchYear: 2017
}
const carEngine ={
    enginePower: "1499cc",
    maxpower: "113 BHP"
}
console.log("Before Merged two Object are:-");
console.log("car:");
console.log(car);

console.log("carEngine:");
console.log(carEngine);
console.log("\n");

console.log("Aftor Merge or Concat Object.assign() Method:");
let mergeAssign = Object.assign(car,carEngine);
console.log(mergeAssign);
console.log("\n");

console.log("Aftor Merge or Concat ...Spread Operator:");
let mergeSpread = {...car, ...carEngine};
console.log(mergeSpread);