let qtdeTotalCartas = prompt('Com quantas você deseja jogar?'); // 1
const numeroMinCartas = 4;
const numeroMaxCartas = 14;

const cartasSelecionadas = [];
const imagensFrentes1 =  [ 'bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif'
, 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];


 

// const imagensFrentes2 =    [ 'bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif'
//     , 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];

while (qtdeTotalCartas % 2 !== 0) {
    alert('Só é permitido números pares.'); //2
    qtdeTotalCartas = prompt('Com quantas você deseja jogar? ');
}

while ((qtdeTotalCartas < 4) || (qtdeTotalCartas > 14)) {
    alert('A quantidade de cartas permitas para o jogo são de 4 até 14.');
    qtdeTotalCartas = prompt('Com quantas você deseja jogar? ');
}

let contador = 0;
while ((qtdeTotalCartas / 2) > contador) { //qtdeTotalCartas 4
    const cartas = document.querySelector('.cartas');
    console.log(cartas);
    // const imagem = document.querySelector('.imagem');

    const posicaoAleatoria = Math.floor(Math.random() * imagensFrentes.length);
    cartas.innerHTML = cartas.innerHTML + `<div class='carta' onclick='virarCarta(this)'>
                                                <div class='cartaVerso'><img src="./imagens/front.png" ></div>                                                                                             
                                                
                                                <div class='cartaFrente'><img src="./imagens/${imagensFrentes[posicaoAleatoria]}" ></div>                                                 
                                        </div>`;
                                        imagensFrentes.splice(posicaoAleatoria,1);
                                                                                
    /* <div class='cartaFrente'><img src="./imagens/fiestaparrot.gif" ></div>  */ 
    contador++;
    // cartasSolicitadas.push();
    // cartas.innerHTML = cartas.innerHTML + `<li>${cartasSolicitadas[contador]}</li>`; 
}

function virarCarta(carta) {
    const cartaVerso = carta.querySelector('.cartaVerso');
    cartaVerso.style.display = "none";

    const cartaFrente = carta.querySelector('.cartaFrente');
    cartaFrente.style.display = "block";


}
