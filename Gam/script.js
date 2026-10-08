const randomnumber= Math.floor(Math.random()* 10+1);
console.log("Random Number:", randomnumber);
const input= document.getElementById("guess number");
const button= document.getElementById("btn");
const para= document.getElementById("result");

button.addEventListener("click",() =>{
    const guess= Number(input.value)
    if(!guess || guess >10 || guess <0){
        para.innerText="Please enter a number"
    }
    else if (guess === randomnumber){
        para.innerText = "🎉Correct";
    }

    else if (guess < randomnumber){
        para.innerText="Too Low!";
    }
    
    else{
        para.innerText = "Too high!";
    }
})
