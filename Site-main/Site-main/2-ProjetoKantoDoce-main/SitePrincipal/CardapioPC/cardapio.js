function menuVoltar() {
    window.location.href = "/SitePrincipal/PRINCIPAL.html";
}

const pedir = document.querySelectorAll(".pedir");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
    
};

$(document).ready(function () {
    $(pedir).click(function () {
        toggleModal();
    });

    $(closeModal).click(function () {
        toggleModal();
        $("#quantidade").text(quant = 0);
    });

    $(fade).click(function () {
        toggleModal();
        $("#quantidade").text(quant = 0);
    });

    $("#adicionar").click(function (){
        let quantidade = document.querySelector("#quantidade").innerHTML;
        let quant = parseInt(quantidade);
        if(quant < 20){
            $("#quantidade").text(quant = quant + 1);
        }
    });

    $("#subtrair").click(function (){
        let quantidade = document.querySelector("#quantidade").innerHTML;
        let quant = parseInt(quantidade);
        if(quant > 0){
            $("#quantidade").text(quant = quant - 1);
        }
    }); 
});