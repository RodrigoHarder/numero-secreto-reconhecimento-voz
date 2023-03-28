function verificaValorDoChute(chute){
    const numero = +chute;
    if(chuteInvalido(numero)){
        if(chute=='game over'){
            document.body.innerHTML=`<span class="emoji">☠️</span><h2 class="titulo">Game Over</h2><button id="jogar-novamente" class="botao-jogar-dois">Jogar Novamente</button>`
            document.body.style.backgroundImage= 'linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%)';
        }else{
            elementoChute.innerHTML += `<div>Valor inválido</div>`;
            return
        }
    }
    if(numeroMaiorQueOMaximo(numero)){
        elementoChute.innerHTML += `<div>Valor inválido! Fale um valor entre: ${menorValor} e ${maiorValor}</div>`;
        return
    }
    if(numero===numeroSecreto){
        document.body.innerHTML=`<span class="emoji">🎉</span><h2 class="titulo">Você acertou!</h2><h3 class="subtitulo">O número secreto era: ${numeroSecreto}</h3> <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>`
        document.body.style.backgroundImage='linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%)';
    }else if(numero>numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor que ${chute} <i class="fa-solid fa-arrow-down"></i></div></div>`
    } else{
        elementoChute.innerHTML += `<div>O número secreto é maior que ${chute} <i class="fa-solid fa-arrow-up"></i></div></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorQueOMaximo(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e)=>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload();
    }
})

