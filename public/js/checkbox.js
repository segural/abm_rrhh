window.onload = function(){

    let check = document.querySelector("#check");
    let service = document.querySelector("#service");


    check.addEventListener("change", function(e){
        if (check.checked != true) {
            service.style.display= "none";
        } else {
            service.style.display= "block";
        }
})
}