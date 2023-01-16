

const arrayRoll = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log("Given Array is:= ",arrayRoll);
console.log("------------------------------------------------------------------------------------");

console.log("1) Reverse the array ...." );
console.log(arrayRoll.reverse());
console.log("------------------------------------------------------------------------------------");

arrayRoll.sort();
    console.log("2) Use the sort() method as it is Without any custom sorting logic");
    console.log(arrayRoll);
    console.log("------------------------------------------------------------------------------------");

    
    console.log("3) Sort the array in ascending order order, by writing your custom logic..");
    arrayRoll.sort((a,b)=>{
          return  a>b ? 1 : -1;
    });
    console.log(arrayRoll);
    console.log("------------------------------------------------------------------------------------");


    console.log("4) Find the Gretest number in array...");
    console.log(`Gretest No is : ${arrayRoll[arrayRoll.length-1]}`);
    console.log("------------------------------------------------------------------------------------");


    console.log("5) Fing the Smallest number From the array...");
    arrayRoll.sort((a,b)=>{
       return a>b ? -1 : 1 ;
    });
    console.log(`Smallest number is: ${arrayRoll[arrayRoll.length-1]}`);
    console.log("------------------------------------------------------------------------------------");


    console.log("6) Remove the Duplicates From Array..");
    const mySet = new Set(arrayRoll);
    console.log(mySet);

