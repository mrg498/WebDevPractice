//alert("connected");
const h1p1 = document.querySelector("#p1Score");
const h1p2 = document.querySelector("#p2Score");
const playingTo = document.querySelector("#playingTo");
console.log(playingTo);
let winner = false;
let scoreToWin = 5;

const numInput = document.getElementsByTagName("input")[0];


const p1Button = document.querySelector("#p1");
let p1Score = 0;

const p2Button = document.querySelector("#p2");
let p2Score = 0;

const resetButton = document.querySelector("#reset");

const isGameOver = function(){
    if (p1Score >= scoreToWin){
        h1p1.classList.add("green");
        return true;
    }
    else if (p2Score >= scoreToWin) {
        h1p2.classList.add("green");
        return true;
    }
    else{
        return false;
    }  
}

p1Button.addEventListener("click", ()=>{
    //alert("clicked");
    
    
    if(winner === false){
        p1Score++;
        console.log(p1Score);
        h1p1.textContent = p1Score;
    }
    else{
        alert("The game is already over");
    }

    winner = isGameOver();
});

p2Button.addEventListener("click", () => {
    //alert("clicked");
    

    if(winner === false){
        p2Score++;
        console.log(p2Score);
        h1p2.textContent = p2Score;
    }
    else{
        alert("The game is over");
    }

    winner = isGameOver();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    h1p1.textContent = p1Score;
    h1p2.textContent = p2Score;
    winner = false;
    h1p1.classList.remove("green");
    h1p2.classList.remove("green");
}

resetButton.addEventListener("click", ()=>{
    //alert("clicked");
    reset();
});

numInput.addEventListener("change", () =>{
    //alert("numInput changed");
    playingTo.textContent = numInput.value;
    scoreToWin = numInput.value;
    reset();
});