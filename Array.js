//Example 1 read item


let fruits = ["apple", "mango", "kiwi"]

console.log(fruits[0])
console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);


//Example 2 chnage, add, remove

let fruit = ["apple", "mango", "kiwi"];

fruit[1] = "banana"
console.log(fruit)

fruit.push("grape")
console.log(fruit)

fruit.pop()
console.log(fruit)

fruit.unshift("fig")
console.log(fruit)

fruit.shift()
console.log(fruit)

console.log(fruit.includes("grape"))


//Example 3 loop through an array with for...of

let pets= ["dog","cat","parrot"]

for(let pet of pets)
    console.log(`I like my ${pet}`)

//Example 4 loop with index (normal for)

for (let i=0;i<pets.length;i++)
    console.log(`${i}: ${pets[i]}`)


//Example 5 add up number in an array


let price=[20,50,30]
let total=0

for (let p of price){
    total+=p
}
console.log(total)


//
    

