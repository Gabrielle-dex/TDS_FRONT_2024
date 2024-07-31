// ele precisa passar um valor ou pode ser um int
// && E
// posição = p
// ultimo valor clicado = uvc

const tabuleiro = document.getElementsByClassName("campo");
const resultado = documen.getElementsByClassName("resultado");

console.log(resultado);

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
     valida_tabuleiro("x");
     valida_tabuleiro("O");
    }
// || ou
    if(valida_tabuleiro ("X") || valida_tabuleiro("O")){
        // ? if
        // se não :
        resultado.innerHTML = `o ganhor foi: ${uvc == "X" ? "O" : "X"}`; 

    }
}
//validadores
// (tabuleiro[0].innerHTML == tabuleiro[1].innerHTML && tabuleiro[0].innerHTML == tabuleiro[2].innerHTML) ideia de formato
function valida_tabuleiro(valor){

// linha 0, 1, 2 do tabuleiro se todos eles tiver o mesmo é valido

    if(tabuleiro[0].innerHTML == valor && tabuleiro[1].innerHTML  == valor && tabuleiro[2].innerHTML == valor){
        //mostrar para o usuario no expecionar
        console.log("Fechou linha 1");
        // significa que alguém ganhou
        return true;
        //mostra para o usuario no html - paype paype
        resultado.innerHTML = `O ganhador foi: ${valor}`;
    } else 
        if (tabuleiro[3].innerHTML == valor && tabuleiro[4].innerHTML == valor && tabuleiro[5].innerHTML == valor){
        console.log("Fechou linha 2");
        return true;
    } else 
        if (tabuleiro[6].innerHTML == valor && tabuleiro[7].innerHTML == valor && tabuleiro[8].innerHTML == valor){
        console.log("Fecho linha 3");
        return true;
    } else 
        if (tabuleiro[0].innerHTML == valor && tabuleiro[3].innerHTML == valor && tabuleiro[6].innerHTML == valor){
        console.log("Fechou coluna 1");
        return true;
    } else 
        if (tabuleiro[1].innerHTML == valor && tabuleiro[4].innerHTML == valor && tabuleiro[7].innerHTML == valor){
        return console.log("Fechou coluna 2");
    } else if (tabuleiro[2].innerHTML == valor && tabuleiro[5].innerHTML == valor && tabuleiro[8].innerHTML == valor){
        console.log("Fechou a coluna 3");
        return true;
    }else 
        if
        (tabuleiro[0].innerHTML == valor && tabuleiro[4].innerHTML == valor && tabuleiro[8].innerHTML == valor) {
            console.log("Fechou diagonal 1");
            return true;
        } else 
            if (tabuleiro[2].innerHTML == valor && tabuleiro[4].innerHTML == valor && tabuleiro[6].innerHTML == valor) {
            console.log("Fechou diagonal 2");
            return true;
        }
    }