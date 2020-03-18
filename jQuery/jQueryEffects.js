// if(jQuery){
//     alert("hi");
// }

// $("button").on("click", function(){
//     $("div").fadeToggle(1000, () => {
//         console.log("fade done");
        
//     });
// });

$("button").on("click", function () {
    $("div").slideToggle(200, () => {
        console.log("slide done");

    });
});