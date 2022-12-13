
console.log(`Given a String :-  "     Hey you are doing good, keep it up     "`);
var greet =  "     Hey you are doing good, keep it up     ";
console.log("(1) Print As it is String :-",greet);
console.log("(2) length ot the String :-",greet.length);
var resultTrim = greet.trim();
console.log("(3) Removing Extra Sspaces using trim():-",resultTrim);
var totalSplit = greet.split(" ");
console.log("(4) Total Removing Extra Sspaces :-",totalSplit);

var totalLength =resultTrim.length;
console.log("(5) First Character After Strim():-",resultTrim.charAt(0),"Last Character After Strim():-",resultTrim.charAt(totalLength-1));

var centense =  "Hey you are doing good, keep it up" ;
var resultSplit = centense.split(" ");
console.log("(6) Count of Total Words No:-",resultSplit.length);
console.log("(7) Print Index of Word good:-",  centense.slice(18,-12));
console.log("(8) SubsString starting forom index 22:-", centense.slice(22));
console.log("(9) Ends with word up in String:- ",centense.includes("up"));
console.log("(10) Starts with word Hey Aftr trimming:-", centense.includes("Hey"));