$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("500ms", function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13) {
     let todoText =  $(this).val();
    $("ul").append(`<li><span> <i class='fas fa-trash'></i>  </span> ${todoText} </li>`);
    $(this).val("");
    }
})

$("button").on("click", function(){
    let todoText =  $("input[type='text'").val();
    
    if (todoText === ""){
        return
    } else {
        $("ul").append(`<li><span> X </span> ${todoText} </li>`);
        $("input[type='text'").val("");
    }
   
})

$(".fa-plus").click(function() {
    $("button").fadeToggle();
    $("input[type='text']").fadeToggle();
  
})