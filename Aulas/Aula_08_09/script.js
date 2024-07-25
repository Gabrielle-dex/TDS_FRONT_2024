//alert("funcionou!")
//local onde vai acessar window.document

//carrega input da pagina
const input = window.document.getElementById("input");
//carrega input da pagina
const ul = window.document.getElementById("ul");

//var permanece até o final
//let variavel literaria criar por menos tempo

//função que adiciona novos itens a minha lista

// isso adiciona no file no armazenamento local
const base_dados = window.localStorage.getItem("dados");

if (base_dados == null){
    //ele espera 2 parametros nome dados e o valor
    window.localStorage.setItem("dados", "[]");
}
var alunos =[];
function carregar_dados (){
    console.log(JSON.parse)
}

function adicionar(){
    if (input.value !== ""){
        const li = window.document.createElement("li");
        //carrega o valor digitado no input na li
        console.log(input.value);
        
        li.innnerHTML= input.value;
        //aplica a "li" dentro da "ul"
        ul.appendChild(li);
        // console.log(input.value);

        //limpa o input
        input.value ="";
    }else{
        alert("O Campo está vazio!");
    }
}

function adicionar(){

}