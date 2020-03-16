//alert();

//array of colors to display
let numColors = 6;
let colors = generateRandomColors(numColors);

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const easyButton = document.querySelector("#easy");
const hardButton = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", ()=>{
    //alert("easy");
    messageDisplay.textContent = "";
    numColors = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", () => {
    //alert("hard");
    messageDisplay.textContent = "";
    numColors = 6;
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
});

resetButton.addEventListener("click", ()=>{
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});


for(let i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners
    squares[i].addEventListener("click", function(){
        
        //get color of clicked square and compare to the the picked color
        
        const clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = document.body.style.backgroundColor;
            messageDisplay.textContent = "Try Again";

        }
    });

}

function changeColors(color){
    for(let i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    
    const random = Math.floor(Math.random() * (colors.length));
    return colors[random];
}

function generateRandomColors(num){
    //make array
    const arr = [];

    for(let i = 0 ; i < num; i++){
        const randomR = Math.floor(Math.random() * (256));
        const randomG = Math.floor(Math.random() * (256));
        const randomB = Math.floor(Math.random() * (256));

        const colorString = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
        //console.log(colorString);
        arr.push(colorString);
    }

    return arr;
}

