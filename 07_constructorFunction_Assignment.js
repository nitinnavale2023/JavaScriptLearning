
function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;

}

console.log("");
console.log("Create constuctor function & Object Details: ");
let yesBank = new Bank("YESBank","Slapur", "YESN00124562", 1214 );
let sbiBank = new Bank("SBIBank","Sangola", "SBI00115488", 1234 );
let mahBank = new Bank("MAHBank","pune", "SBI00120115", 4567 );
let axisBank = new Bank("AXISBank","Pandharpur", "AXIS00198745", 7891 );
console.log("Bank Details is :-",yesBank);
console.log("Bank Details is :-",sbiBank);
console.log("Bank Details is :-",mahBank);
console.log("Bank Details is :-", axisBank );

console.log("\n");
//"Add Prototype object
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";


console.log(`SBI Bank Opening is:- "${sbiBank.openTime}" And Closeing Time is:" ${sbiBank.closeTime}"\n`);
console.log(`Bank Name is: "${ axisBank.bankName}" AND Closeing Time is:" ${ axisBank .closeTime}"\n`);
console.log(`Bank Name is: "${yesBank.bankName}" BranchCode is: "${yesBank.branchCode}" AND Opening Time is: "${yesBank.openTime}"`);