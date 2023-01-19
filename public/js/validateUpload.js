window.onload = function(){

    let form = document.querySelector("#wizard-validation-form");
    let allowedExtensions = /(.pdf)$/i;
    let imgsize = document-querySelector("#voucher")[0].files[0].size;

    form.addEventListener("submit", function(e){
        let errores = [];
        if(imgsize > 5000000){
            errores.push("El archivo supera los 5Mb."); 
        } 
        if(form.image.value != ""){
            if(!allowedExtensions.exec(form.voucher.value)){
            errores.push("El formato de la imagen debe ser PDF"); 
        }} 
        if(errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector(".errores");
            ulErrores.innerHTML = "";
            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            });
        }
})}