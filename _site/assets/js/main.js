document.getElementById("hamburger").onclick =  function(){
    var buttons = document.getElementById("buttons");
    if (buttons.className == "buttons") {
        buttons.className = "buttons visible";
    } else {
        buttons.className = "buttons";
    }
    
};