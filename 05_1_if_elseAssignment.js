

//  function voting(age){
//     if(age<=0 || age>120){
//         console.log(`Invalid data`);
//     }
//     else 
//     if(age>=18){
//         console.log(`voting age ${age} for eligible`);
//     }
//   else{
//     console.log(`voting age ${age} for Not eligible`);
//   }
// }
// voting(45);
// voting(17);
// voting(8);
// voting(20);
// voting(-10);
// voting(200);
// voting(0);

// console.log(`------------------------------------------------------------------------------------------------------------------------`);


function gradeCalculation(marks){
  
   if(typeof marks == "number"){
     if(marks<=0 ||marks>100)
    {
        console.log(`Please Provide the valid Marks`);
    }
    if(marks>=90 && marks<=100)
    {
        console.log(`Funtastic Marks :- ${marks}, Your grade is A+`);
    }
     if(marks>=75 && marks<90)
    {
        console.log(`Excellent Marks :- ${marks}, Your grade is A`);
    }
     if(marks>=50 && marks<75)
    {
        console.log(`Good Marks :- ${marks}, Your grade is B`);
    }
    if(marks>=35 && marks<50)
    {
        console.log(` Marks is :- ${marks}, Your grade is C, Need Improvement`);
    }
    if( marks<35 && marks>0){
        console.log(` Marks is ${marks}, You are Fail`);
    }
   }
   else{
      console.log(`Invalid data, Enter Marks in number format`);
   }
}
  
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
