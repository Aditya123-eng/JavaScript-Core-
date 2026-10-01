//Task 1.1

// let a="Aditya"
    console.log("Aditya")


//Task 1.2

console.log(20)


//Task 1.3

console.log(12*4)

//Task 1.4

//print my name

console.log("Hello World")



//Task 2.1

const myName="Archana"
console.log(myName)



//Task 2.2

let age=20;
console.log(age)
age = age+1;
console.log(age)


//Task 2.3

// const school= "ABC school"
// school= "XYZ school"


//Task 2.4

let a= 7,b=3;
sum = a+b;
console.log(sum)




//Task 3.1

let city= "jamshedpur"; //string
let student = 40;           //number
let isSunny = true;          //boolean

console.log(typeof city);
console.log(typeof student);
console.log(typeof isSunny);


//Task 3.3

console.log(typeof "5")
console.log(typeof 5)


//Task 3.4

let x;
console.log(x)



//Task 4.1

2**8
console.log(2**8)


//task 4.2

console.log(17%2)

console.log(17%2==0)


//Task 4.3

console.log("5"===5)

//Task 4.4

let count=0
count= count+3
// count++
// count++;
console.log(count)



//Task 5.1

let first= "aditya"
let last= "kumar"
console.log(`${first} ${last}`)


//Task 5.2

let name= "Aditya"
console.log(name.length)


//Task 5.3

console.log("javascript" .toUpperCase())


//Task 5.4

let names= "Aditya"
console.log(names[0])




//Task 6.1
let ages= 12 //20
if(ages>=20){
    console.log("Adult")
}
else{
    console.log("Minor")
}


//Task 6.2
let num=-4
if(num>0){
    console.log("positive")
}
else if(num<0){
    console.log("negative")
}
else{
    console.log("zero")
}


//Task 6.3

let n=7
if(n%2==0){
    console.log("Even No.")
}
else{
    console.log("Odd NO.")
}


//Task 6.4
let fruit= "banana"

switch (fruit) {
  case "apple":
    console.log("Red");
    break;
  case"banana":
    console.log("Yellow");
    break;

  default:
    console.log("Green")
}


//Task 7.1

for (let i=1;i<=5;i++){
    console.log(i)
}


//Task 7.2

//Way 1

for (let i=2;i<=20;i+=2)
    console.log(i)


//Way 2

for (let i=2;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}



//Task 7.3

for (let i=1;i<=10;i++)
    console.log(`5x${i}=${5*i}`)


//Task 7.4

let total=0

for(let i=1;i<=100;i++){
    total = total+ i;

}
    console.log(total)


//Task 7.5

let y=10

while (y>=1){
    console.log(y)
    y--
}
console.log("Done!")



//Task 7.6

for (let i=1;i<=100;i++){
    if (i===6) {break;}
    console.log(i)
}


//Task 8.1

function sayHi(){
    console.log("Hi!")
}
sayHi()


//Task 8.2

function multiply(a,b){
    return a*b
}

console.log(multiply(12,4))


//Task 8.3

function isEven(n){
    return n%2==0
}
console.log(isEven(7))
console.log(isEven(4))


//Task 8.4

const toCelsius=(f)=>{
    return n%2===0
}
console.log(toCelsius(4))
console.log(toCelsius(9))



//Task 8.5

function biggest (a,b,c){
    if (a>b && a>c)
        console.log("A is Biggest")
    
    else if (b>c && b>a)
        console.log("B is Biggest")
    
    else 
        console.log("C is Biggest")
    
}
biggest (2, 9, 5)
biggest (15,20,50)


//Task 9.1

let foods=["pizza","dosa","pasta","momos","biryani"]

console.log(foods[0])
console.log(foods[4])
console.log(foods[foods.length-1])

//Task 9.2

foods.push("idli")
console.log(foods.length)
console.log(foods)



//Task 9.3

for (let food of foods){
    console.log(food)
}


//Task 9.4

let nums=[4,9,2,7]
let totals=0

for (let n of nums){
    totals += n
}
console.log(totals)