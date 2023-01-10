

const arrayNumbers= [10, 3, 4, 50, 6];
arrayNumbers.forEach(function(currentValue, index, array){
 console.log(currentValue, index, array);
});

arrayNumbers.forEach(function(currentValue){
    console.log(currentValue);
   });

arrayNumbers.forEach((currentValue)=>{
    console.log(currentValue);
});

arrayNumbers.forEach(currentValue=>console.log(currentValue));

console.log("======== Find even numbers==========");
const array = [2, 3, 4, 5, 6, 7, 0, 34, 57];
console.log(array);
array.forEach( (currentValue) => {
    if(currentValue%2==0) {
      console.log(currentValue);
    }
})

const arrayn = [2, 3, 4, 5, 6, 7, 0, 34, 57];
const arrayOfEven = [];
console.log(arrayn);
array.forEach( (currentValue) => {
    if(currentValue%2==0) {
        arrayOfEven.push(currentValue);
      console.log(currentValue);
    }
});
console.log("Array of even numbers");
console.log(arrayOfEven);


console.log("Callback with arg functions");
let add = function (n1, n2){
    console.log(n1+n2);
}
let multiply = function (n1, n2){
    console.log(n1*n2);
}

function operation(callbackAdd, callbackMultiply) {
    console.log('operation');
    callbackAdd(5, 5);
    callbackMultiply(2, 2);
} 
operation(add, multiply);


class Vehicle {
  constructor(company,model,fuel,drive,price){
      this.company=company;
      this.model=model;
      this.fuel=fuel;
      this.drive=drive;
      this.price=price;
  }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
arrayOfVehicles.forEach( (vehicle) => {
  if (vehicle.price<150000) {
      console.log(vehicle.model,vehicle.company, vehicle.drive, vehicle.fuel, vehicle.price);
  }
  } );

  console.log("====== Set of Vehicles =======");
  const setOfVehicles = new Set();
  setOfVehicles.add(audiA3);
  setOfVehicles.add(audiQ3);
  setOfVehicles.add(mahindra);
  setOfVehicles.add(honda);
  setOfVehicles.add(hero);
  setOfVehicles.forEach( (itemVehicle)=> {
      console.log(itemVehicle.model);
  } );

  console.log("====== Map of Vehicles =======");
  let mapOfVehicles = new Map();
  mapOfVehicles.set("REG_11", audiA3);
  mapOfVehicles.set("REG_22", audiQ3);
  mapOfVehicles.set("REG_33", mahindra);
  mapOfVehicles.set("REG_44", hero);
  mapOfVehicles.set("REG_55", honda);

  mapOfVehicles.forEach((vehicleObject, regNo) => {
      console.log(vehicleObject.model, regNo);
  } );

  