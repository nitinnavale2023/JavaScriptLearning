//WAP to count charactor 'a' or 'A'

function countCharA(string){
    var counter = 0;
 for (let index = 0; index < string.length; index++) {
   var char = string.charAt(index);
    if(char=='a' || char=='A'){
        //console.log(char);
        counter = counter +1;
        console.log(`Given a String :- ${string}`);
    }
    
   
   
 }

 console.log(`Total numbre of 'a' or 'A' Civefn a String value:- ${counter}`);
 console.log(`-----------------------------------------------------------------------------`);
}
 countCharA("I AM Learning JavaScript, the Language of internet");
 countCharA("My favourite movie is LAggAn");
// var sentence = "I AM Learning JavaScript, the Language of internet";
// var counter = 0;
// for (let index = 0; index < sentence.length; index++) {
//     var char = sentence.charAt(index);
//     if (char=='a' ||  char=='A') {
//        // console.log(char);
//         counter = counter +1;
//     }   
// }
// console.log(`Total vowels in string is : ${counter}`);