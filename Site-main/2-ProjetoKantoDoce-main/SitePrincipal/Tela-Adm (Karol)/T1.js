function voltar2() {
    window.location.href = "/SitePrincipal/PRINCIPAL.html";
}

$(document).ready(function() {
    $("#logar").click(function () {
        let usuario = document.querySelector("#usuario").value;
        let senha = document.querySelector("#senha").value;
        if(usuario == "doce" && senha == "1919"){
            window.location.href = "/SitePrincipal2/PRINCIPAL2.html";
        }else{
            alert("Usuario e Senha Inválida");
        }
    });


});