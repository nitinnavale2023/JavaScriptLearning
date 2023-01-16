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
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const array_emps =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("1) Find all the employees from 'Wipro' Company....");
const arrayOfFilter = array_emps.filter((element)=>{
      return  element.emp_company=="Wipro";
})
arrayOfFilter.forEach((curentValue)=>{
    console.log(`Employee Name: ${curentValue.emp_name}, Company Name: ${curentValue.emp_company}`);
})

console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log("2) Find all the employees from 'IT' OR 'HR' Department....");

 array_emps.filter((element)=>{
    if(element.emp_dept=="IT" || element.emp_dept=="HR"){
        console.log(`Employee Name:-${element.emp_name}   Company:-${element.emp_company}   Department:-${element.emp_dept}`);
    }
})
console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log("3) Find all the employees Whose emp id's are greater than (>) 50....");

const arrayFilter = array_emps.filter((curentValue)=>{
   return curentValue.emp_id > 50;
});
    arrayFilter.forEach((element)=>{
        console.log(`ID:-${element.emp_id}  Name:-  ${element.emp_name} Company:-  ${element.emp_company}  Department:-${element.emp_dept}`);
    })
    console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log("4) Employee Start with letter 'A' or 'V' or 'M'....");

const startName = array_emps.filter((value)=>{
   return value.emp_name.startsWith("A") || value.emp_name.startsWith("V") ||value.emp_name.startsWith("M");
       })
       startName.forEach((element)=>{
        console.log(element);
       })
console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log("5) Average Salary of  employees...");
 
let arraySalary =[];
     array_emps.forEach((value)=>{
        arraySalary.push(value.emp_salary);
     })
     console.log(arraySalary);
     const result = arraySalary.reduce((runningTotal, value)=>{
          return  runningTotal + value;
     })
     console.log("Avrage of Salary:=", result/arraySalary.length);
         console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log("6) Average Salary of 'IT' Department...");
       const arrayItSalary = array_emps.filter((value)=>{
       return value.emp_dept=="IT";
       })
       let salaryIt=[];
       arrayItSalary.forEach((value)=>{
                salaryIt.push(value.emp_salary);
       })
       console.log(salaryIt);
       const resultSalary = salaryIt.reduce((runningTotal, value)=>{
            return runningTotal + value;
       })
       console.log(`Average Salary of It department is := ${resultSalary / salaryIt.length}`);