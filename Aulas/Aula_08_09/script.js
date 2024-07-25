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
var base_dados = window.localStorage.getItem("dados","[]");

//verifica se não existe, caso não, criar
if (base_dados == null){
    //ele espera 2 parametros nome dados e o valor
    window.localStorage.setItem("dados", "[]");
    //limpar
    base_dados ="[]";
}
//variavel global
var alunos =[];

//busca uma unica vez
function carregar_dados (){
    // transforma lista em script
    alunos = JSON.parse(bados_dados); 

    alunos.forEach (item => {
        //cria a li
        const  li = Window.document.createElement("li");
        //carrega o valor digitado no input na li
        li.innerHTML = item;

        //aplica a "li" dentro da "ul"
        ul.appendChild(li);
    });

}

function adicionar(){
    if (input.value !== ""){
        //criar li
        const li = window.document.createElement("li");
        //carrega o valor digitado no input na li
        li.innerHTML = input.value;
        
        //adiciona item na lista de alunos
        alunos.push(input.value)
        window.localStorage.setItem("dados", JSON.stringify(alunos));
       
        //aplica a "li" dentro da "ul"
        ul.appendChild(li);

        //limpa o input
        input.value ="";
    }else{
        alert("O Campo está vazio!");
    }
}
