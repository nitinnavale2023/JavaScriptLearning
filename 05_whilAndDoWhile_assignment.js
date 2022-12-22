//WAP  to Print Numbers from 5 to 15 by incrementing 1

var index=5
while(index<=15){
    console.log(index);
    index++;
}
//WAP to print numbers from 50 to 40 by decrementing by 1
console.log(`---------------------------------------------------------------`);
var i=50
while(i>=40){
    console.log(i);
    i--;
}
console.log(`---------------------------------------------------------------`);
//WAP to find first 15 odd numbers
var index=1;
while(index<=15){
   if(index%2!==0){
    console.log(`${index} this number is Odd `);
    }
    index++;
}
console.log(`---------------------------------------------------------------`);
//WAP to find first 10 even number

var a=1;
while(a<=10){
    if(a%2==0){
        console.log(`${a} thes number is Even`);
    }
    a++;
}
console.log(`---------------------------------------------------------------`);
//WAP to print table of 5 like -> 5 10 15 20 25 .....50

var index=5;
do {
    console.log(index);
    index = index+5;
} while (index<=50);
console.log(`---------------------------------------------------------------`);
//WAP to pint table of 10 like -> 10 20 30 ......100

var i=10;
do {
    console.log(i);
    i = i+10;
} while (i<=100);
console.log(`---------------------------------------------------------------`);
//WAP to print table of 10 in reverse order like -> 100 90 80 70 .....10

var reverse=100;
do {
    console.log(reverse);
    reverse = reverse-10;
} while (reverse>=10);