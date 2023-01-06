

class Bank  {
    constructor(bank_name, location, account_no, ifsc, interest_rate){
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;
}
}
console.log(`A) Create class Bank`);
console.log("----------------------------------------------------------------------------------------------------------------------------");

console.log("B) Create Objects");
console.log("----------------------------------------------------------------------------------------------------------------------------");
let axis_bank = new Bank("AXISBank", "Pandharpur", "0010001005487", "AXIS00198745", 7891 );
let sbi_bank = new Bank("SBIBank", "Sangola", "0010002457896", "SBI00115488", 1234 );
let icici_bank = new Bank("ICICI Bank", "Solapur","010005487924", "ICICI00124562", 1214 )
let kotak_bank = new Bank("Kotak Bank", "pune", "01000154987", "KOTK00120115", 4567 );
let hdfc_bank = new Bank("Hdfc Bank", "Satara", "0010001876421", "HDFC00125789", 4567 );
let panjab_bank = new Bank("Panjab Bank", "Panjab", "0100001457952", "PAN00120946", 4567 );

console.log(`C) Create new Map  and key is Account No `);
const bankOfMap = new Map();
bankOfMap.set("0010001005487", axis_bank);
bankOfMap.set("0010002457896", sbi_bank);
bankOfMap.set("010005487924", icici_bank);
bankOfMap.set("01000154987", kotak_bank);
bankOfMap.set("010001005487", hdfc_bank);
bankOfMap.set("0100001457952", panjab_bank);

const bankOfKey = bankOfMap.keys();
console.log(bankOfKey);
console.log("----------------------------------------------------------------------------------------------------------------------------");
console.log(`D) Traverse the map Bank Name, Account No And Interest Rate is`);
for (const key of bankOfKey) {
    const  bank = bankOfMap.get(key);
    console.log(`Bank Name is: ${bank.bank_name} Account No is: ${bank.account_no} Interest Rate is: ${bank.interest_rate}`);
}
