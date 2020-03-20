//check off todos by clicking

//the document object that on click acts on must exist when this code if first run
// so do on click of ul and then specify the child component "li" inside the function
$("ul").on("click", "li", function(){
    //$(this).css("color", "gray");
    //$(this).css("text-decoration", "line-through");
    // if ($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     }); 
    // }
    // else{
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    
    $(this).toggleClass("completed");
});

//click on x to delete todo

// same thing here with ul and span
$("ul").on("click", "span", function(event){
    //alert("clicked on span");
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        const toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
    }   
});

$("#toggle-form").click(function () {
    $("input[type='text']").fadeToggle();
});