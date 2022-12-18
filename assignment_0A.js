


function maleMarriageEligibility(gender, age, boyName){
  
   
    var result = (gender ===" male") || (age>=21) ? ` eligible for Marriage ` : ` Not eligible for Marriage `;
   
   
   console.log(`Hey ${boyName} you are ${result}`) ;
  
}
 var res = maleMarriageEligibility("Male", 25, "Billgates");

 var res = maleMarriageEligibility("Male", 17, "Stew Jobs");
 

console.log("-------------------------------------------------------------------------------------------------");


function femaleMarriageEligibility(gender, age, girlName){
    var result = gender=="female" || age>=18 ? "eligible for Marriage" : "Not eligible for Marriage";
    console.log(`Hey ${girlName} you are ${result}`);
}
femaleMarriageEligibility("Female", 16 ,"Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");