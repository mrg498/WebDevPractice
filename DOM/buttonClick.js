const button = document.querySelector("#b");
console.log(button.textContent);
let isPurple = false;

// button.addEventListener("click", () => {
//     //alert("clicked");
//     if (!isPurple){
//         document.body.style.background = "purple";
//     }
//     else{
//         document.body.style.background = "white";
//     }
//     isPurple = !isPurple;
// });

button.addEventListener("click", () => {
    document.body.classList.toggle("purple");
});