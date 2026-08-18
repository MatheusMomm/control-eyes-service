let tarefas = [];
let contadorId = 0;

let inputText = document.querySelector(".inputText");
let bntEnviar = document.querySelector(".btnEnviar");
let lista = document.querySelector(".lista");

function adicionarTarefa() {
    let texto = inputText.value.trim();

    if (texto !== "") {
        contadorId++;
        tarefas.push({id: contadorId, tarefa: texto, concluido: false});
        inputText.value = "";
        console.log(tarefas);
    }
}

bntEnviar.addEventListener( "click", function(){
    adicionarTarefa();
})

inputText.addEventListener("keydown", function(event){
    if (event.key == "Enter") {
        adicionarTarefa();
    }
})