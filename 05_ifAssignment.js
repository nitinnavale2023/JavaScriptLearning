

function voting(age){
    if(age>=18 && age<120){
        console.log(`the parson age is ${age} is:- eligibal for vote`);
    }
    if(age<=18 && age>=1 ){
        console.log(`The Parson are ${age} is :- Not eligibal for vote`);
    }
    if(age<=0){

        console.log(`In Valid Data `);
    }
    if(age>=120){
        console.log(`In Valid Data `);
    }
    
 

}
voting(45);
voting(17);
voting(8);
voting(20);
voting(-10);
voting(200);
voting(0);
console.log(`------------------------------------------------------------------------------------------------------------------------------`);


function gradeCalculation(marks){
    if(marks>=90 && marks<=100){
        console.log(`Funtastic Marks :- ${marks}, Your grade is A++ `)
    }
    if(marks>=75 && marks<90){
        console.log(`Excellent Marks ${marks}, Your grade is A`);
    }
    if(marks>=50 && marks<75){
        console.log(`Good Marks is ${marks}, You grade is B`);
    }
    if(marks>=35 && marks<50){
        console.log(`Marks is ${marks}, Your grade is C, Need improvement`)
    }
    if(marks<=0 || marks>100 ){
        console.log(`Please Provide the valid marks `);
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





