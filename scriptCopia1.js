
/*oficial */
/*  
Slice - excluir um determinado item do array;
    nomeArray.slice(posicao,qtdeExclusao)
Math.random ()  - valor aleatório gerado pela função entre 0 até 1. 


*/


let qtdeTotalCartas = prompt('Com quantas você deseja jogar?'); // 1
const numeroMinCartas = 4;
const numeroMaxCartas = 14;

const cartasSelecionadas = [];

const imagensFrentes = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif',
                        'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];




    while (qtdeTotalCartas % 2 !== 0) {
        alert('Só é permitido números pares.'); //2
        qtdeTotalCartas = prompt('Com quantas você deseja jogar? ');
    }

    while ((qtdeTotalCartas < 4) || (qtdeTotalCartas > 14)) {
        alert('A quantidade de cartas permitas para o jogo são de 4 até 14.');
        qtdeTotalCartas = prompt('Com quantas você deseja jogar? ');
    }



    let contador = 0;
    while ((qtdeTotalCartas / 2) > contador) { //qtdeTotalCartas 4 entrará 2x
        cartas = document.querySelector('.cartas');   


        //Pega uma posição aleatória no array 
        const posicaoAleatoria = Math.floor(Math.random() * (imagensFrentes.length));
    

        //Adicona no array "carta selecionas" -a mesma quarta duas vezes
        cartasSelecionadas.push(imagensFrentes[posicaoAleatoria]);
        cartasSelecionadas.push(imagensFrentes[posicaoAleatoria]);
    

        //Retira a imagem do array "imagensFrentes" para a mesma não ser escolhida outra vez no modo randômico. 
        imagensFrentes.splice(posicaoAleatoria, 1);
        
     
        contador++;
    }
   
    // console.log('cartasSelecionadas-logo após o push',cartasSelecionadas);


     // Esta função pode ficar separada do código acima, onde você preferir
    function comparador() { 
        return Math.random() - 0.5; 
    }                        

    cartasSelecionadas.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
   
    
    

    // Populando a DOM - divs possuirão as cartas   
    for(let i = 0; i < cartasSelecionadas.length; i++) {    

        cartas.innerHTML = cartas.innerHTML + `
                                          <div class='carta' onclick='virarCarta(this)'>
                                              <div class='cartaVerso'><img src="./imagens/front.png" ></div>                                                                                                                                             
                                              
                                              <div class='cartaFrente'><img src="./imagens/${cartasSelecionadas[i]}" ></div> 
                                             
                                          </div>
                                        `;                                      
    }






//let QtdeJogadas = 0;
let primeiraCartaJaFoiVirada = false;
let cartaVirada1 = null;
let cartaVirada2 = null;
let par = 0;
let verificandoJogada = false;

function virarCarta(carta) {
    

    if(verificandoJogada === true) {
        return;//sai da função
    }

    const cartaVerso = carta.querySelector('.cartaVerso');
    cartaVerso.style.display = "none";

    const cartaFrente = carta.querySelector('.cartaFrente');
    cartaFrente.style.display = "block";

    

    if (primeiraCartaJaFoiVirada === true){
        cartaVirada2 = carta;
        verificarPar();        
    } else{
        primeiraCartaJaFoiVirada = true;
        cartaVirada1 = carta;       
    }
}

function verificarPar() {
    verificandoJogada = true;

    if(cartaVirada1.querySelector('.cartaFrente img').getAttribute('src') === cartaVirada2.querySelector('.cartaFrente img').getAttribute('src')){
        cartaVirada1.setAttribute("onclick", "");
        cartaVirada2.setAttribute("onclick", "");
        resetarJogada();       
        par++ 
    } else {
        setTimeout(desvirarCartas, 1000);     
        
    }

}


function desvirarCartas(){
    cartaVirada1.querySelector('.cartaVerso').style.display = "block";
    cartaVirada1.querySelector('.cartaFrente').style.display = "none";
    cartaVirada2.querySelector('.cartaVerso').style.display = "block";
    cartaVirada2.querySelector('.cartaFrente').style.display = "none";
    resetarJogada(); 
    

}

function resetarJogada(){
    primeiraCartaJaFoiVirada = false;
    cartaVirada1 = null;
    cartaVirada2 = null;
    verificandoJogada = false;
}
    // QtdeVirada
    // let cartaVirada1 = cartaFrente.innerHTML;
    
    // console.log('cartaVirada1',cartaVirada1);

    // - testar se carta virada 1 é igual a carta virada2
    // - criar uma variável par e só adiciona 1, só adiciona 1 quando as duas cartas derem certos. 



// for(let i = 0; i < cartasSelecionadas.length; i++) {    

//     cartas.innerHTML = cartas.innerHTML + `
//                                       <div class='carta'>
//                                           <div class='cartaVerso' onclick='virarCarta(this)'><img src="./imagens/front.png" ></div>                                                                                                                                             
                                          
//                                           <div class='cartaFrente' onclick='virarCarta(this)><img src="./imagens/${cartasSelecionadas[i]}" ></div> 
                                         
//                                       </div>
//                                     `;                                      
// }



// function virarCarta(elemento) {
    
//     elemento.classList.add('viraCarta');
// }
    
