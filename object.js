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
console.log(Object.fromEntries(student))