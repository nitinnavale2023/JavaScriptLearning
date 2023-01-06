console.log("A) Create Class");
console.log("--------------------------------------------------------------------------------------------------------------------------");
class Bank  {
    constructor(bank_name, location, account_no, ifsc, interest_rate){
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;
}
}
console.log("B) Create Objects");
console.log("----------------------------------------------------------------------------------------------------------------------------");
let axis_bank = new Bank("AXISBank", "Pandharpur", "0010001005487", "AXIS00198745", 7891 );
let sbi_bank = new Bank("SBIBank", "Sangola", "0010002457896", "SBI00115488", 1234 );
let icici_bank = new Bank("ICICI Bank", "Solapur","010005487924", "ICICI00124562", 1214 )
let kotak_bank = new Bank("Kotak Bank", "pune", "01000154987", "KOTK00120115", 4567 );
let hdfc_bank = new Bank("Hdfc Bank", "Satara", "0010001876421", "HDFC00125789", 4567 );
let panjab_bank = new Bank("Panjab Bank", "Panjab", "0100001457952", "PAN00120946", 4567 );

console.log("C) Add all object elements in array and Traverse this array using for of loop");


const arrayBank =[axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank];

for (const element of arrayBank) {
    console.log(`Bank Name is:- "${element.bank_name}"  Bank Location is :- "${element.location}"` );
    
}
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");
console.log("D) From the array (Step C) find the object which has name -> Kotak bank ");

for (const element of arrayBank) {
  if(element.bank_name == "Kotak Bank"){
    console.log(element);
  }
   
}
console.log("-------------------------------------------------------------------------------------------------------------------------");
console.log("Log the details on console using for loop");

for (const element of arrayBank){
    console.log(element);
}







