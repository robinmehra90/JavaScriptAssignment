var employees=[
  {name:"Robin",age:26,salary:4000,dob:new Date("1990/11/15")},
  {name:"Akhil",age:18,salary:300,dob:new Date("1992/09/30")},
  {name:"yatindra",age:23,salary:5500,dob:new Date("1994/01/21")},
  {name:"ajay",age:21,salary:6500,dob:new Date("1993/11/20")},
  {name:"saloni",age:19,salary:700,dob:new Date("1995/06/12")}
];

console.log("Filter all Employees Salary > 5000: \n");

for(var i=0;i<employees.length;i++)
{
  if(employees[i].salary>5000)
    console.log("\nName: "+employees[i].name+" Age: "+employees[i].age+" Salary : "+employees[i].salary+" DOB : " +employees[i].dob.getDate()+"/"+('0' + (employees[i].dob.getMonth()+1)).slice(-2)+"/"+employees[i].dob.getFullYear());
}

console.log("\n\n\nGroup Employee on the basis of their age: \n");
employees.sort(function(x,y){
	return x.age-y.age;
});
for(var i =0; i<employees.length;i++){
  console.log("\nName: "+employees[i].name+" Age: "+employees[i].age+" Salary : "+employees[i].salary+" DOB : " +(employees[i].dob.getDate()+"/"+('0' + (employees[i].dob.getMonth()+1)).slice(-2))+"/"+employees[i].dob.getFullYear());
}

console.log("\n\n\nEmployees whose salary is < 1000 and age>20: \n")
for(var i =0;i<employees.length;i++){
    if(employees[i].salary<1000 && employees[i].age>20){
        allemp[i].salary *=5;}}
for(var i =0; i<employees.length;i++){
  console.log("\nName: "+employees[i].name+" Age: "+employees[i].age+" Salary : "+employees[i].salary+" DOB : " +(employees[i].dob.getDate()+"/"+('0' + (employees[i].dob.getMonth()+1)).slice(-2))+"/"+employees[i].dob.getFullYear());
};
