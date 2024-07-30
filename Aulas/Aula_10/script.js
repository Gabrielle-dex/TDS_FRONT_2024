// ele precisa passar um valor ou pode ser um int
// posição = p
// ultimo valor clicado = uvc
const tabuleiro = document.getElementsByClassName("campo");

//const regra = [0,1,2,3,4,5,6,7,8,];

function validador (p){

    if(tabuleiro[p].innerHTML == ""){
    
     if(uvc = "0"){
        tabuleiro[p].innerHTML = "0";
        uvc = "X";
     } else{
       tabuleiro[p].innerHTML = "1";
       uvc ="O"
     }
    }

    //validadores
    if(tabuleiro[0].innerHTML == tabuleiro[1].innerHTML && tabuleiro[0].innerHTML == tabuleiro[2].innerHTML){
        //mostrar para o usuario
        console.log("Parabéns!");
    }else if{
        (tabuleiro[3].innerHTML == tabuleiro[4].innerHTML && tabuleiro[3].innerHTML == tabuleiro[5].innerHTML)
    

}