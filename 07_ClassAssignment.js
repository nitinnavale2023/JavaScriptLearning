class Vehicles{
    constructor(vehicleType, company, vehicleName, chessisNo){
    console.log(`Vehicle types : ${vehicleType}, Company : ${company}, Vehicle Name : ${vehicleName}, Chessis No : ${chessisNo}`);
    }
}
console.log(`Question No :1)Vehicle Class\n`);
const vehicleHero = new Vehicles("Two Wheeler","Bajaj","KTM",124457);
const vehicleInnova = new Vehicles("Four Wheeler","Toyota","Innova Crysta",156874);
const vehicleMahindra = new Vehicles("Three Wheeler","Mahindra","Riksha",154786);
const vehicleSonalika = new Vehicles("Four Wheeler","Sonalika","Tractor",467824);
const vehicleBajaj = new Vehicles("Two Wheeler","Hero Honda","Splender",885722);
console.log(`-------------------------------------------------------------------------------`);

console.log(`Question No :2)College Class`);
class College{
  constructor(name, id, location, university){
    this.name = name;
    this.id = id;
    this.location = location;
    this.university = university;
 }
 showDetails(){
    console.log(`College Name : ${this.name}, College ID : ${this.id}, Location : ${this.location}, University : ${this.university}`);
 }
}
const collegeKbp = new College("Sangola college",4123,"Sangola","Solapur");
collegeKbp.showDetails();
const collegeModern=new College("Vidnyan college",9825,"Shivaji nagar","Pune");
collegeModern.showDetails();
const collegeDYPatil=new College("Dr.D.Y.Patil college",6458,"Kasaba bavada","kolhapur");
collegeDYPatil.showDetails();
const collegeMHINstitute=new College("Maharashtra college",8545,"Deolai Parisar","Aurangabad");
collegeMHINstitute.showDetails();
console.log(`======================================================================================\n`);

console.log(`Question No :3)traverse object with one argument`);
function traverseObject(values) {
    for (const key in traverseObject) {
        if (Object.hasOwnProperty.call(traverseObject, key)) {
            const element = traverseObject[key];
            console.log(`Key :${key}, Element:${element}`);
        }
    }
    console.log(`\n`);
}
traverseObject(collegeKbp);
traverseObject(collegeModern);
traverseObject(collegeDYPatil);
traverseObject(collegeMHINstitute);



console.log(`Question 4)Fibonnacy series`);
function fibonnacySeries() {
    let num1 = 0;
    let num2 = 1;
    console.log(num1, num2);
   for (let index = 0; index <=5; index++) {
    let num3 = num1 + num2;
    console.log(num3);
    num1 = num2;
    num2 = num3;
   }
}
fibonnacySeries();