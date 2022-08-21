
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
        alert('A quantidade de cartas permitidas para o jogo são de 4 até 14.');
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

    let cartaVirada1 = null;
    let cartaVirada2 = null;


    function virarCarta(carta) {   
   
  
        if(iniciouEscolhaDosPares === true){
            return; //Não pode continuar enquanto não fizer a checagem de duas cartas
        }   
   
    
        qtdeViradaCarta++;
       
        versoPassarinho = carta.querySelector('.cartaVerso');
        versoPassarinho.classList.toggle('remover'); 
        
        frenteFigurinha = carta.querySelector('.cartaFrente');
        frenteFigurinha.classList.toggle('remover'); 

    
        if (primeiraCartaFoiVirada === false) {           
            cartaVirada1 = carta;            
            primeiraCartaVirada = carta.querySelector('.cartaFrente');
            primeiraCartaVerso = carta.querySelector('.cartaVerso');
            primeiraCartaImagem = carta.querySelector('.cartaFrente img').getAttribute('src'); 
            primeiraCartaFoiVirada = true;  
            if (primeiraCartaFoiVirada === true) {                
                cartaVirada1.setAttribute("onclick", "");
            }
            
        
        } else {
            

            cartaVirada2 = carta;
            segundaCartaVirada = carta.querySelector('.cartaFrente');   
            segundaCartaVerso = carta.querySelector('.cartaVerso');   
            segundaCartaImagem = carta.querySelector('.cartaFrente img').getAttribute('src');
        
  
        
            // setTimeout(()=>verificarCartasPares(primeiraCartaImagem,segundaCartaImagem), 2000 );
   
        
            verificarCartasPares(primeiraCartaImagem,segundaCartaImagem,carta) ;              
        
        }  
    
        verificarFinalJogo();

    }



    function verificarCartasPares (primeiraCartaImagem, segundaCartaImagem, carta) {
         console.log('verificarPar-primeiraCartaImagem', primeiraCartaImagem);
         console.log('verificarPar-segundaCartaImagem', segundaCartaImagem);
    
        iniciouEscolhaDosPares = true; 
        if (primeiraCartaImagem !== segundaCartaImagem)  {
               setTimeout(desvirarCartas, 1000);         
                qtdeErros++;    
                cartaVirada1.setAttribute("onclick", "virarCarta(this)");       
        } else {
            qtdeAcertos++;            
            console.log('qtdeAcertosExecutado', qtdeAcertos);
            cartaVirada1.setAttribute("onclick", "");
            cartaVirada2.setAttribute("onclick", "");
            iniciouEscolhaDosPares = false;
            //    verificarFinalJogo();      
           
            resertarVariaveis();
        }
    
    }

function desvirarCartas(carta) {  
    
    // console.log('primeiraCartaVirada', primeiraCartaVirada);
    // console.log('segundaCartaVirada', segundaCartaVirada);

    primeiraCartaVirada.classList.toggle('remover');
    primeiraCartaVerso.classList.toggle('remover');
    segundaCartaVirada.classList.toggle('remover');
    segundaCartaVerso.classList.toggle('remover');  
    resertarVariaveis();
    iniciouEscolhaDosPares = false; //Finalizou a checagem dos pares, será permitido clicar em outra carta

    //  verificarFinalJogo();
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
    cartaVirada1 = null;
    cartaVirada2 = null;
}

// verificarFinalJogo()

function verificarFinalJogo() {
    //se todas as cartas forem diferentes que a figura do passarinho, significa que o jogo terminou.
  
    
    // console.log('qtdeAcertos-FuncaoFinalJogo',  qtdeAcertos); 
  
    let qtdeDivsComRemover = 0;
    for(let i= 0; i < divCartasVersos.length; i++) {        
        if (divCartasVersos[i].classList.contains('remover')) {
            qtdeDivsComRemover++;    
        } 
        
    } 
    // console.log('divCartasVersos.length', divCartasVersos.length);
    // console.log('qtdeDivsComRemover', qtdeDivsComRemover);

    if (divCartasVersos.length === qtdeDivsComRemover) {
        // alert('coincidiu');
       
       alert(`Você ganhou em ${qtdeAcertos} jogadas!`);
        
    }    

}

