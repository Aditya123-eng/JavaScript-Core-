function checkEven(no) {
  if (no % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEven(17);

checkEven(50);



function sum2no(a, b) {
  return a + b;
}

let n = sum2no(12, 8);
console.log(n);

// variable based fuction

const checkmain = function (n) {
  if (n % 2 == 0) {
    return true;
  }
};
let result = checkmain(20);
console.log(result);

console.log(checkmain(40));


//arrow function

const checkeven =  (n) => {
  if (n % 2 == 0) {
    return true;
  }
//   else{
//     return false;
//   }
}
let a = checkeven(7);
console.log(a);