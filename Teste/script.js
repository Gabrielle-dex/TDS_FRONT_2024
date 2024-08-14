function enviar(){

    //criação de variavel
    const input_nome = window.document.getElementById('nome');
    const input_email = window.document.getElementById('email');

    //forma de visualizar a mensagem
    const mensagem_confirmacao =  document.getElementById("mensagem_confirmacao");

    mensagem_confirmacao.innerHTML = `Muito obrigado(a), senhor(a) : ${input_nome.value}
    Acabamos de enviar um e-mail para: ${input_email.value}.`
    

    //ideia porem acaba deixando a mensagem fixa
    // const spans = document.getElementsByTagName("span");

    // spans[0].innerHtml = input_nome.value;
    // spans[1].innerHtml = input_email.value;
    // console.log(spans)
}



    //let (deixar) é para receber o conteudo do HTML
    // let mcn = document.getElementById("mc_name"); 


    // utiliza para adicionar um conteudo no HTML
    // document.element.innerHTML = mcn;

    //EXPLICAÇÃO:

    //mostrar todos h1
    //const h1 = document.getElementsByTagName('h1');

    // mostrar cada h1
    //console.log(h1)
    //console.log(h1[0].innerHTML)
    //console.log(h1[1].innerHTML)

    //input usa value, pois ele tem dentro
    //console.log(input_nome.value, input_email.value)