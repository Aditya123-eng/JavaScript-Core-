//Array

const a = [1,10,20]

const [a1,a2,a3]=a
console.log(a1,a2,a3) 


const b= [1,10,20]
const [b1,...b2]=b
console.log(b1,b2)


const c= [1,10,20,30,40]
const [ ,c1,c2]=c

console.log(c1,c2)


/// object 

const x={name: "aditya", age: 19}

const {name , age} = x
console.log(name, age)