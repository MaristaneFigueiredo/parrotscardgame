
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


    
    let divCartasVersos = document.querySelectorAll('.carta .cartaVerso');
   

   




let primeiraCartaFoiVirada = false;
let primeiraCartaQtdeCliques = 0;
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
        console.log('primeiraCartaFoiVirada - Inicio do teste', primeiraCartaFoiVirada)     
        primeiraCartaVirada = carta.querySelector('.cartaFrente');
        primeiraCartaVerso = carta.querySelector('.cartaVerso');
        primeiraCartaImagem = carta.querySelector('.cartaFrente img').getAttribute('src'); 
        primeiraCartaFoiVirada = true;
        
        // console.log('console_contem remover',primeiraCartaVerso.classList.contains('remover'))
        // if(primeiraCartaVerso.classList.contains('remover')) {
            
        //     // carta.onclick='';
        //     primeiraCartaVirada;
        // } 
        // console.log('primeiraCartaFoiVirada - Fim do teste', primeiraCartaFoiVirada) 
        // primeiraCartaQtdeCliques ++;        
        // console.log('primeiraCartaQtdeCliques', primeiraCartaQtdeCliques )        
        // primeiraCartaVerso.classList.contains('remover') ? primeiraCartaFoiVirada === true : primeiraCartaFoiVirada === false;
        // console.log('status primeiraCartaFoiVirada ', primeiraCartaFoiVirada);
        
    } else {
        segundaCartaVirada = carta.querySelector('.cartaFrente');   
        segundaCartaVerso = carta.querySelector('.cartaVerso');   
        segundaCartaImagem = carta.querySelector('.cartaFrente img').getAttribute('src');
        
        // iniciouEscolhaDosPares = true; // Iniciou a checagem dos pares, não é permitido clicar em outra carta
        // primeiraCartaVirada.setAttribute("onclick", "");
        // segundaCartaVirada.setAttribute("onclick", "");
        // carta.setAttribute("onclick", "");
        // if (carta.getAttribute('onclick') !== null) {
        //     console.log("'carta.getAttribute('onclick')", carta.getAttribute('onclick'));
        //     carta.setAttribute("onclick", "");
        //     console.log("'carta.getAttribute('onclick')", carta.getAttribute('onclick'));
        // }
        
        // setTimeout(()=>verificarCartasPares(primeiraCartaImagem,segundaCartaImagem), 2000 );
   
        
        verificarCartasPares(primeiraCartaImagem,segundaCartaImagem) 
        
        
        //   console.log('voltei da checagem dos pares')
        // //  carta.setAttribute('onclick', 'virarCarta(this)')
        //  //  console.log('carta-onclick', carta.getAttribute('onclick'))
        // carta.onclick='virarCarta(this)';
        // console.log('carta-onclick', carta.getAttribute('onclick').onclick)
        // //  carta.onclick()
        
       
        
    }  
    
    

}



function verificarCartasPares (primeiraCartaImagem, segundaCartaImagem) {
     console.log('verificarPar-primeiraCartaImagem', primeiraCartaImagem);
     console.log('verificarPar-segundaCartaImagem', segundaCartaImagem);
    
    iniciouEscolhaDosPares = true; 
    if (primeiraCartaImagem !== segundaCartaImagem)  {
           setTimeout(desvirarCartas, 1000);           
            qtdeErros++;
            
    } else {
       qtdeAcertos++;            
       console.log('qtdeAcertosExecutado', qtdeAcertos);
       iniciouEscolhaDosPares = false;
       verificarFinalJogo();
       resertarVariaveis();
     }

}

function desvirarCartas(carta) {
   
    alert('pensando');
    // console.log('primeiraCartaVirada', primeiraCartaVirada);
    // console.log('segundaCartaVirada', segundaCartaVirada);

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
  
    
    // console.log('qtdeAcertos-FuncaoFinalJogo',  qtdeAcertos); 
  
    // let qtdeDivsComRemover = 0;
    // for(let i= 0; i < divCartasVersos.length; i++) {        
    //     if (divCartasVersos[i].classList.contains('remover')) {
    //         qtdeDivsComRemover++;    
    //     } 
        
    // } 
    // console.log('divCartasVersos.length', divCartasVersos.length);
    // console.log('qtdeDivsComRemover', qtdeDivsComRemover);

    // if (divCartasVersos.length === qtdeDivsComRemover) {
    //     alert('coincidiu');
    // }
 



    

}