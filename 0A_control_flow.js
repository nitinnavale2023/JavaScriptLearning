

var vowels = "I am very good IT Developer";
var counter =0;
for (let index = 0; index < vowels.length; index++) {
    let char = vowels.charAt(index);
   if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
   char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
   // console.log(char);
    counter = counter +1;
   }
  
}
console.log(`(1) Total vowels in ${vowels} string is : ${counter}`);
console.log(`--------------------------------------------------------------------`);

//WAP to get the  sum of cube of numbers from 1 to 5

  
    function sumOfCube(){
        var sum =0;
    for (let index = 1; index <=5; index++) {
        var cube =(index*index*index);
        sum = sum+cube;
        
     }
     console.log(` sum of cube of numbers from 1 to 5 is :- ${sum}`);
    }
    sumOfCube(5);
    console.log(`--------------------------------------------------------------------`);
    function oddPositionedChars(string){
        console.log(`My String is :- ${string}`)
       var emptystring = "";
       var mystring = string.split(" ").join("");
       //console.log(mystring);
       for (let index = 0; index < mystring.length; index++) {
        if(index%2!=0){
            emptystring = emptystring + mystring[index];
        }
       }
  
    
        console.log(`Odd number of index in string is :- ${emptystring}`);
     
    }
    oddPositionedChars("Hard work always pays back");
    console.log(`--------------------------------------------------------------------`);
    oddPositionedChars("Soon I Will be Angular IT Champ");



    // function oddPosionedChars(string){
    //     console.log(`The Given String Is : ${string}.`);
    //     var emptyString = "";
    //     var myString = string.split(" ").join (" ");
     
    //     for (let index = 0; index < myString.length; index++) {
    //         if (index % 2 != 0) {
    //             emptyString = emptyString + myString[index];
    //         }
            
    //     }
    //     console.log(`Odd positioned char in the string is : ${emptyString}.`);
    // }
    // oddPosionedChars("Hard work always pays back");
    // console.log(`=======================================\n`);
    // oddPosionedChars("soon I Will be Angular IT champ");
