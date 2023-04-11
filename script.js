setTimeout(function(){
    alert("Você se considera bom em adivinhação? Vamos jogar um jogo!");
},300); 

function mostra(mensagem) {
    document.write("<h3>" + mensagem + "</h3>")
}

function mostraFimJogo(){
    document.write("<body style='background-image: linear-gradient(#D9AFD9, #97D9E1);'></body>")
    document.write("<h2 style='font-family:monospace; text-align:center; padding-top: 300px;'>" + "Uau! Você acertou em " + numeroTentativas+ " tentativa(s), pois eu pensei no " + numeroPensado+ "." + "<br><br><button onClick='window.location.reload()'>Jogar outra vez</button>" + "</h2>" );
}

function mostraVocePerdeu(){
    document.write("<body style='background-image: linear-gradient(#D9AFD9, #97D9E1);'></body>")
    document.write("<h2 style='font-family:monospace; text-align:center; padding-top: 300px;'>" + "Parece que você não é tão bom em adivinhação, você usou todas suas tentativas, o número era " + numeroPensado + "." + "<br><br><button onClick='window.location.reload()'>Tentar outra vez</button>" + "</h2>")
}

function sorteia(n) {
    return Math.round(Math.random() * n) +1 //adicianar o número 100
}

function limparTentativa() {
    let campo = document.getElementById("numeroChute");
    if(campo.value != ""){
        campo.value = "";
    }
}

const numeroMaximoTentativas = 11;
let numeroTentativas = 1;
let numeroPensado = sorteia(100);
let campoChute = document.getElementById("numeroChute");

campoChute.focus();

function verificaChute(){

    let chute = document.getElementById("numeroChute").value;
    chute = Number(chute);
    
    while(numeroTentativas < numeroMaximoTentativas) {
        if(chute == numeroPensado) {
            mostraFimJogo();
            break;
        } else {
            numeroTentativas++;
            let numeroTentativasRestantes = numeroMaximoTentativas - numeroTentativas;
            if(numeroTentativasRestantes > 0) {
                if(chute < numeroPensado) {
                    alert("Você errou! Estou pensando em um número maior.");
                    break;
                } else {
                    alert("Você errou! Estou pensando em um número menor.");
                    break;
                }
            }
        }
        if(numeroTentativas == 11) {
            mostraVocePerdeu();
        }
    }
        limparTentativa();
        campoChute.focus();
}

campoChute.addEventListener("keypress", function(cliqueEnter) {
    if(cliqueEnter.key === "Enter") {
        cliqueEnter.preventDefault();
        document.getElementById("botaoChute").click();
    }
});

