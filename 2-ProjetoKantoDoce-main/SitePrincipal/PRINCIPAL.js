function menuShow () {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        
    }else {
        menuMobile.classList.add('open');
    }
}


// Script para linkar abas do Menu

//Scripts para linkar as abas do MENU - PC

function feedback1() {
    window.location.href = "/SitePrincipal/FeedbackPC/feedbackPC.html";
}

function Cardapio1() {
    window.location.href = "/SitePrincipal/CardapioPC/CardapioPC.html";
}

function Home1() {
    window.location.href = "/SitePrincipal/PRINCIPAL.html";
}

function Login1(){
    window.location.href = "/SitePrincipal/EntrarPC/EntrarPC.html";
}

function Cadastro1(){
    window.location.href = "/SitePrincipal/CadastroPC/cadastroPC.html";
}

// function enviado() {
//     alert ("Obrigado por enviar seu feedback!")
// }

//------------------------------------------------------------------------------------

//futuramente é uma boa fazer um alert personalizado para ao enviar o formulario de contato, retornar uma mensagem de retorno para o cliente

//Scripts para linkar as abas do MENU - MOBILE
//-------------------------------------------------------------------------------------------------


function Feedback2() {
    window.location.href = "/SitePrincipal/FeedbackMobile/FeedbackMobile.html";
}

function Cardapio2() {
    window.location.href = "/SitePrincipal/CardapioMobile/CardapioMobile.html";
}

function Home2() {
    window.location.href = "/SitePrincipal/PRINCIPAL.html";
}

function Login2 (){
    window.location.href = "/SitePrincipal/IntermediariaMobile/CLmobile.html";
}




//funcionalidade infinita do carrossel 

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}



//Dropdown - funcionamento

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


