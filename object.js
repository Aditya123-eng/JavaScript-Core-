const a= {
    name: "Aditya",
    roll: "17",
    course: "BCA",

}
console.log(a.name)
a.name="lucky"
console.log(a.name)
console.log(a.roll)
console.log(a.course)

a.section= "b"
console.log(a)



let student ={
    name: "Sunny",
    roll: "14",
    course: "BCA"
}
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(Object.fromEntries(Object.entries(student)))
console.log(Object.hasOwn(student, "name"))
// console.log(Object.freeze(student))

// student.name= "Aditya"
// console.log(student)

student.section = "b";
console.log(student);


delete student.section
console.log(student)

student.name= "Aditya"
console.log(student)

console.log(student.name)

let x= {
    name: "Archana",
    age: 19

}
Object.seal(x)
x.name= "Adi"


delete x.name
console.log(x)

let y= {
    // name: "Adi",
    age: 19
}

console.log(Object.defineProperty(y, "age" ,{value: 20}));

console.log(Object.assign(student, y))




