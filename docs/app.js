let CardList = [
{
    nome: "fries",
    img: "img/fries.png",
},

{
    nome: "cheeseburguer",
    img: "img/cheseburger.png",
},

{
    nome: "ice-cream",
    img: "img/ice-cream.png",
},

{
    nome: "pizza",
    img: "img/pizza.png",
},

{
    nome: "milkshake",
    img: "img/milkshake.png",
},

{
    nome: "hotdog",
    img: "img/hotdog.png",
},

{
    nome: "fries",
    img: "img/fries.png",
},

{
    nome: "cheeseburguer",
    img: "img/cheseburger.png",
},

{
    nome: "ice-cream",
    img: "img/ice-cream.png",
},

{
    nome: "pizza",
    img: "img/pizza.png",
},

{
    nome: "milkshake",
    img: "img/milkshake.png",
},

{
    nome: "hotdog",
    img: "img/hotdog.png",
},
]


CardList.sort(function aleatorio (){
    return 0.5 - Math.random()
})


function criarelementoimagem(posicao){
    let card = document.createElement("img")
    card.setAttribute("src", "img/back.jpg")
    card.setAttribute("data-posicao", posicao)
    card.addEventListener("click", virarImagem)
    return card
}


function criarTabuleiro(){
    let grid = document.querySelector(".grid")
    
    for (let voltas = 0; voltas < CardList.length; voltas++){
        let cardImagem = criarelementoimagem(voltas)
        grid.appendChild(cardImagem)
    }
}

criarTabuleiro()


let cardsViradosNome = [];
let cardsViradosNumero = [];


function virarImagem() {
  let posicao = this.getAttribute("data-posicao");

  
  this.setAttribute("src", CardList[posicao].img);
  cardsViradosNome.push(CardList[posicao].nome);
  cardsViradosNumero.push(posicao);

  
  if (cardsViradosNome.length === 2) {
    setTimeout(checarIgualdade, 300);
  }
}

let cardsDescobertos = []

function checarIgualdade(){
    let cards = document.querySelectorAll("img");

    let posicaoCardEscolhidoUm = cardsViradosNumero[0];
    let posicaoCardEscolhidoDois = cardsViradosNumero[1];
    let nomePrimeiraImagemEscolhida = cardsViradosNome[0];
    let nomeSegundaImagemEscolhida = cardsViradosNome[1];

    
    if (posicaoCardEscolhidoUm === posicaoCardEscolhidoDois) {
        cards[posicaoCardEscolhidoUm].setAttribute("src", "img/back.jpg");
        cards[posicaoCardEscolhidoDois].setAttribute("src", "img/back.jpg");
        alert("Você escolheu a mesma imagem duas vezes!");
    }

    else if (nomePrimeiraImagemEscolhida === nomeSegundaImagemEscolhida) {
        cards[posicaoCardEscolhidoUm].removeEventListener("click", virarImagem);
        cards[posicaoCardEscolhidoDois].removeEventListener("click", virarImagem);
        cardsDescobertos.push(cardsViradosNome);
    }
    

    else {
        cards[posicaoCardEscolhidoUm].setAttribute("src", "img/back.jpg");
        cards[posicaoCardEscolhidoDois].setAttribute("src", "img/back.jpg");
        alert("Tente novamente!");
    }

    cardsViradosNome = [];
    cardsViradosNumero = [];

    if (cardsDescobertos.length === CardList.length / 2) {
        alert("Parabéns, você encontrou todos os pares!");
    }

}
