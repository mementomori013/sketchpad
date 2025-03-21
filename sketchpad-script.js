const body = document.createElement("body")
const divContainer = document.querySelector("#container")
const btn = document.querySelector("#btn")

btn.addEventListener("click", ()=>{
    let num = 0;
    let numofSquare = Number(prompt("please enter a number: "))
    num = numofSquare
    if (numofSquare > 100) {
        let message = alert("your in input is more than 100 ")
    }
     else {
        divContainer.innerHTML = ""
        generateSquares(num)
    }
    
    
})

function generateSquares(num){
for (let i = 0; i < num; i++){
    const div = document.createElement("div")
    divContainer.appendChild(div)
    for (let j = 0; j < num; j++){
        const div = document.createElement("div")
        divContainer.appendChild(div)
      
    }
  
}
}


divContainer.addEventListener("mouseover", (e) => {
    e.target.className = "changeColor"
  
})

