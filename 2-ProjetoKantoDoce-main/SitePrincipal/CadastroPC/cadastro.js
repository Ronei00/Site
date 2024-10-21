function voltar2() {
    window.location.href = "/SitePrincipal/PRINCIPAL.html";
}


$(document).ready(function (){
    $("#login").click(function (){
    const objs = 
    [
        {
            nome: document.querySelector("#usuario").value,
            email: document.querySelector("#e-mail").value,
            senha: document.querySelector("#senha").value,
        },
    ]
    const json = JSON.stringify(objs);
    console.log(json);
    });
})

//Função formato telefone

function formatarTelefone(input) {
    // Remove qualquer caracter que não seja número
    var telefone = input.value.replace(/\D/g, "");

    // Verifica se o número é um número válido
    if (/^\d{10,11}$/.test(telefone)) {
        // Formata o número de telefone
        if (telefone.length === 10) {
            telefone = '55 (' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 6) + '-' + telefone.substring(6);
        } else if (telefone.length === 11) {
            telefone = '55 (' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 7) + '-' + telefone.substring(7);
        }
        input.value = telefone;
    }
}
