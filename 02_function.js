function display(){
    console.log("My Name: Nitin");
    console.log("My sir Name is: Gaganan sir");
}
display();//function call or function invocation

function shw(){
    console.log("sangola college sangola");
}
shw();

function swapValues(value1,value2){
    console.log("Befor Swap", value1,value2);
    var temp = value1;
      value1 = value2;
    value2 = temp;
    console.log("After Swap", value1,value2);

}
swapValues(100,200);
swapValues(2,6);
swapValues("Nitin","Akshay");
swapValues("You","Me");

