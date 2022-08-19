
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
                                              
                                              <div class='cartaFrente remover'><img src="./imagens/${cartasSelecionadas[i]}" ></div> 
                                             
                                          </div>
                                        `;                                      
    }



// function virarCarta(carta) {
//     const cartaVerso = carta.querySelector('.cartaVerso');
//     cartaVerso.style.display = "none";

//     const cartaFrente = carta.querySelector('.cartaFrente');
//     cartaFrente.style.display = "block";
// }



let primeiraCartaFoiVirada = false;
let versoPassarinho = null;
let frenteFigurinha = null;
let primeiraCartaImagem = null;
let segundaCartaImagem = null;
let primeiraCartaVirada = null;
let primeiraCartaVerso = null;
let segundaCartaVirada = null;
let segundaCartaVerso = null;
let iniciouEscolhaDosPares = false;
let qtdeViradaCarta = 0;
let qtdeAcertos = 0;
let qtdeErros = 0;


function virarCarta(carta) {   
   
  
    if(iniciouEscolhaDosPares === true){
        return; //Não pode continuar enquanto não fizer a checagem de duas cartas
    }
   
    qtdeViradaCarta++;
    // const versoPassarinho = carta.querySelector('.cartaVerso');
    versoPassarinho = carta.querySelector('.cartaVerso');
    versoPassarinho.classList.toggle('remover'); 

    // const frenteFigurinha = carta.querySelector('.cartaFrente');
    frenteFigurinha = carta.querySelector('.cartaFrente');
    frenteFigurinha.classList.toggle('remover'); 

    
    if (primeiraCartaFoiVirada === false) {        
        primeiraCartaVirada = carta.querySelector('.cartaFrente');
        primeiraCartaVerso = carta.querySelector('.cartaVerso');
        primeiraCartaImagem = carta.querySelector('.cartaFrente img').getAttribute('src'); 
        primeiraCartaFoiVirada = true;
    } else {
        segundaCartaVirada = carta.querySelector('.cartaFrente');   
        segundaCartaVerso = carta.querySelector('.cartaVerso');   
        segundaCartaImagem = carta.querySelector('.cartaFrente img').getAttribute('src');
        
        iniciouEscolhaDosPares = true; // Iniciou a checagem dos pares, não é permitido clicar em outra carta
        // primeiraCartaVirada.setAttribute("onclick", "");
        // segundaCartaVirada.setAttribute("onclick", "");
        // carta.setAttribute("onclick", "");
        // if (carta.getAttribute('onclick') !== null) {
        //     console.log("'carta.getAttribute('onclick')", carta.getAttribute('onclick'));
        //     carta.setAttribute("onclick", "");
        //     console.log("'carta.getAttribute('onclick')", carta.getAttribute('onclick'));
        // }
        
        setTimeout(()=>verificarCartasPares(primeiraCartaImagem,segundaCartaImagem), 2000 );
        
        // verificarCartasPares(primeiraCartaImagem,segundaCartaImagem) 
        console.log('volto aqui');
        
    }    
}



function verificarCartasPares (primeiraCartaImagem, segundaCartaImagem) {
    console.log('verificarPar-primeiraCartaImagem', primeiraCartaImagem);
    console.log('verificarPar-segundaCartaImagem', segundaCartaImagem);
    
    if (primeiraCartaImagem !== segundaCartaImagem)  {
           setTimeout(desvirarCartas, 4000);           
            qtdeErros++;
            // resertarVariaveis(); /*falar com igor)
    } else {
       qtdeAcertos++; 
       resertarVariaveis();
     }
     iniciouEscolhaDosPares = false; //Finalizou a checagem dos pares, será permitido clicar em outra carta
    //  verificarFinalJogo();
}

function desvirarCartas(carta) {
   
    alert('pensando');
    console.log('primeiraCartaVirada', primeiraCartaVirada);
    console.log('segundaCartaVirada', segundaCartaVirada);

    primeiraCartaVirada.classList.toggle('remover');
    primeiraCartaVerso.classList.toggle('remover');
    segundaCartaVirada.classList.toggle('remover');
    segundaCartaVerso.classList.toggle('remover');  
    resertarVariaveis();
    iniciouEscolhaDosPares = false; //Finalizou a checagem dos pares, será permitido clicar em outra carta

}

function resertarVariaveis() {
    primeiraCartaFoiVirada = false;
    versoPassarinho = null;
    frenteFigurinha = null;
    primeiraCartaImagem = null;
    segundaCartaImagem = null;
    primeiraCartaVirada = null;
    primeiraCartaVerso = null;
    segundaCartaVirada = null;
    segundaCartaVerso = null;
}

// verificarFinalJogo()

function verificarFinalJogo() {
    //se todas as cartas forem diferentes que a figura do passarinho, significa que o jogo terminou.
    alert('Entrei p verificar se é final de jogo');
    console.log('qtdeViradaCarta',qtdeViradaCarta);
    console.log('qtdeTotalCartas',qtdeTotalCartas);
    if (qtdeViradaCarta === qtdeTotalCartas){
        console.log('numero bateu', qtdeViradaCarta); 
    }

}