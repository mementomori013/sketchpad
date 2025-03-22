const body = document.createElement("body")
const divContainer = document.querySelector("#container")
const btn = document.querySelector("#btn")
const btnContainer = document.querySelector(".button-container")
const btnGenerate = document.querySelector(".generate")
let numofSquares = 256;
let nameofClass = "sixteen"
let boxColor = "black"

// btn.addEventListener("click", ()=>{
//     let num = 0;
//     let numofSquare = Number(prompt("please enter a number: "))
//     num = numofSquare
//     if (numofSquare > 100) {
//         let message = alert("your in input is more than 100 ")
//     }
//      else {
//         divContainer.innerHTML = ""
//         generateSquares(num)
//     }    
// })

btnContainer.addEventListener("click", (e) => {
    const class1 = e.target.className
   
    switch (class1){
        case "btn-sixteen":
            numofSquares = 256;
            nameofClass = "sixteen"
            break;
        case "btn-four":
            numofSquares = 16;
            nameofClass = "four";
            break;
        case "btn-two":
            numofSquares = 4;
            nameofClass = "two";
            break;
        case "btn-reset": 
            divContainer.innerHTML = " "
            break;
        case "btn-black": 
            boxColor = "black"
            break;
       case "btn-rainbow": 
            boxColor = "rainbow"
            break; 
        case "generate":
            divContainer.innerHTML = " "
            generateSquares(numofSquares, nameofClass); 
        default:
          

    }
       
})

btnGenerate.addEventListener("click", (e) => { 
    console.log(numofSquares)
      
})

function generateSquares(num, className){
   
    console.log("console " + nameofClass)
    for (let i = 0; i < num; i++){
        const div = document.createElement("div")
        div.className = className
        
        divContainer.appendChild(div)
    }   
}

divContainer.addEventListener("mouseover", (e) => {
    console.log(nameofClass)
    switch (boxColor){
        case "black":
            if(e.target.className == nameofClass){
                console.log(e.target.className)
                e.target.style.backgroundColor = "black"
            }
        break;
        case "rainbow":
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        if(e.target.className == nameofClass){
        e.target.style.backgroundColor = "#" + randomColor
        }
        break;
    }
})



