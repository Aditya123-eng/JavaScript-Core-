const name = "Aditya";
let age = 20;
const coursefee = 3500;
const ispaid = true;


console.log(`Student name is ${name}, age ${age}, coursefee ${coursefee}, ispaid ${ispaid}`);


age += 5;

const paid40percent=(40/100)+(3500/100)
const remainingfee = coursefee-paid40percent



 2

const marks= 80
const attendance= 100
const project= false
if (marks>100 || marks<0 || attendance>100 || attendance<0)
    console.log("Invalid marks")
else if (marks>=60 && attendance>=75 && project){
    console.log("Eligible For Certificate")
}
else if (marks>=60 && attendance>=75 && project == false){
    console.log("Project is Not Submitted")
}
else{
    console.log("Not Eligible Certificate")
}

//3
const calculateBill=(p,q,discount,tax) =>{
    
    let price= p*q
    let d= price*discount
    let t= price*tax
    let subtotal= p+q+t-d
    return subtotal
}
console.log(calculateBill(50,5,10,18))

// 4
let student =['aniket','PRIYA','rohit','Neha']
student=student.map((name)=>name.toUpperCase());
student.push("Aman")
console.log(student)
student.shift()
console.log(student)
console.log(student.includes("rohit"))



// 5
const s={
    name: "Aditya",
    age: 20,
    course:"BCA",
    skill: ["HTML","CSS","js"]
}
console.log(s)
delete s.name
delete s.course
console.log(s)




