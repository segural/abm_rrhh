window.onload = function(){

    let select = document.querySelector("#select");
    let number = document.querySelector("#number");
    let date = document.querySelector("#date");
    let completed = document.querySelector("#completed");
    let check = document.querySelector("#check");
    let service = document.querySelector("#service");
    let button = document.querySelector("#uploadbutton");
    let allservice = document.querySelector("#allservice");
    let h1service = document.querySelector("#h1service");
    let cancel = document.querySelector("#cancel");


    select.addEventListener("change", function(e){
        if (select.value != "Remito") {
            number.style.display= "none";
            date.style.display= "none";
            completed.style.display= "none";
        } else {
            number.style.display= "block";
            date.style.display= "block";
            completed.style.display= "block";
        }
    });
    check.addEventListener("change", function(e){
        if (check.checked == true) {
            service.style.display= "block";
            button.setAttribute("hidden", true);
        } else {
            service.style.display= "none";
            button.removeAttribute("hidden");
        }
    });
    button.addEventListener("click", function(e){
        allservice.setAttribute("hidden", true);
        h1service.setAttribute("hidden", true);
    });
    cancel.addEventListener("click", function(e){
        allservice.removeAttribute("hidden");
        h1service.removeAttribute("hidden");
    });
}