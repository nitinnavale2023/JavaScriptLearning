
class Employee{
    
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 4750000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log((`1) "TCS" Employee Ditails :`));
const array =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

array.forEach((currentValue)=>{
    if(currentValue.emp_company=="TCS"){
        console.log(`Employee Name is:- ${currentValue.emp_name}, Company Name is:- ${currentValue.emp_company}`);
    }
    });
    console.log(`--------------------------------------------------------------------------------------------------------------------`);

    console.log(`2) Find the employees with salary (>= 50000 ) Details then..`);
array.forEach((currentValue)=>{
    if(currentValue.emp_salary>=50000){
        console.log(`Emp_Id :- ${currentValue.emp_id}, Emp_Name :- ${currentValue.emp_name}, Emp_Department :- ${currentValue.emp_dept}, Emp_Salary :- ${currentValue.emp_salary}, Emp_Company :- ${currentValue.emp_company}`);
    }
});
console.log(`---------------------------------------------------------------------------------------------------------------------`);

//console.log(`3) Find the sum of All employees Salary is..`);

let sum =0;
array.forEach((currentValue)=>{
   sum += currentValue.emp_salary;
});
console.log(`3) All Employees Sum of Salary is:-${sum}`);
console.log(`---------------------------------------------------------------------------------------------------------------------`);

console.log(`4) Find the average salary is.. Formula= (Average = Total Salary / Number of employees)`);
let numOfEmployee = array.length;
console.log(`Total Salary = ${sum}`);
console.log(`Number of employees = ${numOfEmployee}`);
let average = sum / numOfEmployee;
console.log(`Average of Salary is := ${average}`);
console.log(`---------------------------------------------------------------------------------------------------------------------`);

console.log(`5) Fing the 'IT' OR 'HR' Dept. employees whose salary is (>= 75000 ) Details then:--`);

array.forEach((currentValue)=>{
        if(((currentValue.emp_dept=="IT" ) || (currentValue.emp_dept=="HR")) && (currentValue.emp_salary >=75000)){
                console.log(`Emp_Id:- ${currentValue.emp_id}, Emp_Name:- ${currentValue.emp_name}, Emp_Dept.:- ${currentValue.emp_dept}, Emp_Salary:- ${currentValue.emp_salary}, Emp_Company:- ${currentValue.emp_company}`);
        }
})