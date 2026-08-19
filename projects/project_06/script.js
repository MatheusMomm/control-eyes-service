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
        renderizar();
    }
}

bntEnviar.addEventListener( "click", function(){
    adicionarTarefa();
})

inputText.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        adicionarTarefa();
    }
})

function renderizar() {
    lista.innerHTML = "" ;
    tarefas.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item.tarefa;
        lista.appendChild(li);

        let btnExcluir = document.createElement("button")
        btnExcluir.innerText = "❌"
        li.appendChild(btnExcluir);
        btnExcluir.addEventListener("click", function(e){
            e.stopPropagation();

            tarefas = tarefas.filter(function(t){
                return t.id !== item.id
            })
            renderizar();
        })
    })
}