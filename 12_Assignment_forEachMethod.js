

const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("Given array is:-", array_numbers);

console.log(`1)--- The Given array index is:-`);
array_numbers.forEach((currentValue, index)=>{
    
    console.log("Array element is:-", currentValue, "  index is:- ",index);
})
console.log(`--------------------------------------------------------------------------------------------------`);

console.log(`2)--- Given array positive numbers:- `);
const positive = [];
array_numbers.forEach((currentValue) =>{

    if(currentValue>=0){
        positive.push(currentValue)
       
    }
});
console.log(positive);

console.log(`--------------------------------------------------------------------------------------------------`);

console.log("Given array is :-",array_numbers );
console.log("3)--- Nigetive Numbers add into new array is :");
const arrayOfNigative =[];
array_numbers.forEach((currentValue)=>{
    if(currentValue<0){
        arrayOfNigative.push(currentValue);
       //console.log(currentValue);

    }

})
console.log(arrayOfNigative);
console.log(`--------------------------------------------------------------------------------------------------`);

console.log("4)--- Even no of Given array is:-");
const even =[];
array_numbers.forEach((currentValue)=>{
        if(currentValue%2==0){
            even.push(currentValue);
            
        }
})
console.log(even );
console.log(`--------------------------------------------------------------------------------------------------`);
console.log();
let sum = 0;
array_numbers.forEach((currentValue)=>{
       sum += currentValue;
       
})
console.log("5)--- Sum of all elements form Given array:-",sum);

console.log(`--------------------------------------------------------------------------------------------------`);

console.log("6)--- Even Positioned Value is");
array_numbers.forEach((currentValue, index)=>{
        if( index%2==0){
            console.log("array Position: ",index,"array Value:",currentValue);
        }
})