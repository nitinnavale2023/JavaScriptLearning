const arrayNums = [20, 3, 4, 56, 90, 400, 49];
let arrayClone = arrayNums; // Shallow Cloning
console.log("Given Array is:-  ", arrayNums);
console.log("Cloning Array is:- ", arrayClone);
arrayClone.push(55, 66);
console.log("=====================Update Cloned Array is================");
console.log("Given Array is:- -- - - - -- - ", arrayNums);
console.log("Update Array Values 55, 66 is:-", arrayClone);

console.log(
  `--------------------------------------------------------------------------------------------------------------`);
const arrayNum = [20, 3, 4, 56, 90, 400, 49];
let arraydeep = [...arrayNum]; // Deep Cloning
console.log("Given Array is:----- -- ", arrayNum);
console.log("Deep Cloning Array is:- ", arraydeep);
console.log("=====================Update Original Array is================");
arrayNum.push(10, 25);
console.log("Update Array value 10,25  is:-  ", arrayNum);
console.log("Deep Cloning Array is:--------- ", arraydeep);
console.log(
  `-----------------------------------------------------------------------------------------------------------`);

console.log("=====================Merge Array is================");
const arrayEven = [2, 30, 14, 8];
console.log(" Given Array is :-", arrayEven);
let arrayMerge = [...arrayEven, ...arrayNums];
console.log("Merge Array is :-", arrayMerge);
console.log( `------------------------------------------------------------------------------------------------`);

const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "OM vrindavan Society",
      street: "Kanch Pokli",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
//console.log("=======Employee Details is================");
console.log(`Employee Address: Locality, city, State and Country is `)
console.log("Employee Locality:", employee_info.address.locality);
console.log("Employee City is:", employee_info.address.city);
console.log("Employee State:", employee_info.address.state);
console.log("Employee Country:", employee_info.address.country);
console.log("Employee mobile No:", employee_info.mobiles);
console.log( `---------------------------------------------------------------------------------------------`);

let empclone = JSON.parse(JSON.stringify(employee_info));
console.log("Before Updating Property July_month in Clone object is:-", empclone.salary.july_month);
empclone.salary.july_month = "80k";
console.log("After Update Property July_month in Clone object is:-", empclone.salary.july_month);
console.log( `-----------------------------------------------------------------------------------------------`);
console.log("Before Updating Property Country in Orignal object is:-", employee_info.address.country);
employee_info.address.country = "United Kingdom";
console.log("After Update Property Country in Orignal object is:-", employee_info.address.country);


