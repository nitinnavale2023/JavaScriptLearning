function noArgument(){
    console.log("Sangola");
}
noArgument();
function  noReturnType(){
    console.log("Maharashtra");
}
noReturnType();
console.log("-------------------------------------------------------------------------------------------------------");

function prasnalDitails(firstName,lastName,collegeName){
    console.log("First Name  :", firstName);
    console.log("Last Name   :", lastName);
    console.log("College Name:",collegeName);
}
prasnalDitails("Nitin","Navale","Songola College Sangola");
console.log("-------------------------------------------------------------------------------------------------------");

function swapValues(value1,value2){
    console.log("Before Swap:",value1,value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap :",value1,value2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("-------------------------------------------------------------------------------------------------------");

function addThreeValues(value1,value2,value3){
    console.log(value1+value2+value3);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");