
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



// function virarCarta(carta) {
//     const cartaVerso = carta.querySelector('.cartaVerso');
//     cartaVerso.style.display = "none";

//     const cartaFrente = carta.querySelector('.cartaFrente');
//     cartaFrente.style.display = "block";
// }


function virarCarta(carta) {


    const cartaVerso = carta.querySelector('.cartaVerso');
         cartaVerso.style.display = "none";
    
         const cartaFrente = carta.querySelector('.cartaFrente');
         cartaFrente.style.display = "block";
}
    