(function(){
    /*Variables to screen and buttons*/
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");
    /*event listner for Number buttons and Adding / Substracting / Dividing & Multiplication buttons*/
    buttons.forEach(function(button) {
        button.addEventListener("click", function(e){
            let value = e.target.dataset.num;
            console.log(value);
            screen.value += value;
        });
    });
    /*event listner for equal button*/
    equal.addEventListener("click", function(e){
       if (screen.value === "") {
          screen.value = "";
        } else{
            console.log(screen.value);
            let answer = eval(screen.value);
            screen.value = answer;
        } 
    });
    /*even listner for clear button*/
    clear.addEventListener("click", function(){
        screen.value = "";
    });


})();
