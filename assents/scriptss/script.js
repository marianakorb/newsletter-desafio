
function validar() {
    const section = document.querySelector("section#singup");
    const divSuccess = document.querySelector(".div-success-message");
    section.style.display = "none";
    divSuccess.style.display = "block";

    
}

function fecharAba() {  
    const section = document.querySelector("section#singup");
    const divSuccess = document.querySelector(".div-success-message");
    
    divSuccess.style.display = "none";
    section.style.display = "flex";
}

function emailRequired() {

    const input = document.querySelector("#email-box");
    const message = document.querySelector("span.erro-message");
    
    message.style.display = "block";
    input.classList.add("erro");

}
