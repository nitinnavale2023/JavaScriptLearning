let professor={
      name:"Vasant sir",
      age: 64,
      hight: 6,
      weight: 70,
      LandMark: "Shivaji Chowk",
    degrees:{
      engineering:'"CSC"' ,
      PHD: "`Adv Computing`",
      Medical: "`D Pharmacy`",
      add:function(){
      return this.engineering+this.PHD+this.Medical;
    },
    certificates:{
      First: "Hacker Rank Participation",
      Second: "certificatein IFE Cource",
      thire:  "Certificate in Adv Progamming",
        
    }  

}
}
console.log(`empty object is :${professor}`);
console.log(`------------------------------------------------------------------`);

console.log(` add professor Information :-`);
console.log(professor);
console.log(`------------------------------------------------------------------`);

console.log(` add nested object is Degree:- `);
console.log(professor.degrees);
console.log(`------------------------------------------------------------------`);

console.log(` Add nested object is Certificates `);
console.log(professor.degrees.certificates);
console.log(`------------------------------------------------------------------`);

const totaldegrr = professor.degrees.add();
console.log(`concat all degrees :- ${totaldegrr}`);
console.log(`------------------------------------------------------------------`);

const adding = professor.City= "Sangola";
console.log(` Adding property:- ${adding}`);
console.log(`------------------------------------------------------------------`);


console.log(`Existing property :-${professor.LandMark}`);
const modify =professor.LandMark= "pune";
console.log(` Modify the property ;- ${modify}`);
console.log(`------------------------------------------------------------------`);


console.log(`Before Deleteing Certificates:- `);
console.log(professor.degrees.certificates);
console.log(`------------------------------------------------------------------`);

delete professor.degrees.certificates.Second;
console.log(`After Deleteing Certificates:- `);
console.log(professor.degrees.certificates);
console.log(`------------------------------------------------------------------`);

 professor.degrees.certificates.second= "Certificates of MSCIT";
 console.log(`Adding propetry in certifictes:-`);
 console.log( professor.degrees.certificates);
