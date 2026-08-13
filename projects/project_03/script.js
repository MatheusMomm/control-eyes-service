const frases = [
  "Às vezes, sobreviver já é uma vitória.",
  "Eu só queria uma vida simples, mas o mundo não deixou.",
  "Sonhos pequenos também podem valer uma vida inteira.",
  "Não preciso de um motivo bonito para continuar.",
  "Talvez eu esteja quebrado, mas ainda estou de pé.",
  "Se o inferno vier atrás de mim, eu corro até ele cansar.",
  "Algumas coisas parecem felicidade quando você está desesperado.",
  "Eu não sei o que quero da vida, só sei que não quero parar.",
  "Monstros também podem ter medo de ficar sozinhos.",
  "No fim, todo mundo só quer alguém ao seu lado.",
];

const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");

function mostrarFrase() {
    let indice =  Math.floor(Math.random() * frases.length);
    fraseTexto.textContent = frases[indice]
}

btnFrase.addEventListener("click", function(){
    mostrarFrase();
});