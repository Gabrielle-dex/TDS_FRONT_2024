//Ler valores nome e email | input
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementsById("mensagemconfirmacao");

function mensagemconfirmacao (){

 if (button.innerHTML == onclick){

    console.log("Nome caputurado");
    console.log("Email capturado");
 
    mensagem.innerHTML = `Muito obrigado(a), senhor(a) : ${nome.value}
    Acabamos de enviar um e-mail para: ${email.value}.`
    return true;
 }

}

// innerhtml é sobre um conteudo de uma tag