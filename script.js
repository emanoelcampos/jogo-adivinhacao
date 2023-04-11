//carregar site antes do alerta de desafio para jogar
setTimeout(function(){
    alert("Você se considera bom em adivinhação? Vamos jogar um jogo!");
},300); 

function mostra(mensagem) {
    document.write("<h3>" + mensagem + "</h3>")
}

//mensagem acertar na primeira tentativa
function mostraConseguiuPrimeira(){
    document.write("<title>Na primeira! Foi sorte?</title>")
    document.write("<body style='background-image: linear-gradient(#D9AFD9, #97D9E1);'></body>")
    document.write("<h2 style='font-family:monospace; text-align:center; padding-top: 300px;'>" + "Uau! Você acertou na primeira tentativa, pois eu pensei no " + numeroPensado+ "." + "<br><br><button onClick='window.location.reload()'>Jogar outra vez</button>" + "</h2>" );
}

//mensagem acertar entre 2 e 10 tentativas
function mostraVoceConseguiu(){
    document.write("<title>Você ganhou! :) </title>")
    document.write("<body style='background-image: linear-gradient(#D9AFD9, #97D9E1);'></body>")
    document.write("<h2 style='font-family:monospace; text-align:center; padding-top: 300px;'>" + "Você conseguiu, acertou em " + numeroTentativas+ " tentativas, pois eu pensei no " + numeroPensado+ "." + "<br><br><button onClick='window.location.reload()'>Jogar outra vez</button>" + "</h2>" );
}

//mensagem usuário perdeu
function mostraVocePerdeu(){
    document.write("<title> Você perdeu :( </title>")
    document.write("<body style='background-image: linear-gradient(#D9AFD9, #97D9E1);'></body>")
    document.write("<h2 style='font-family:monospace; text-align:center; padding-top: 300px;'>" + "Parece que você não é tão bom em adivinhação, você usou todas suas tentativas, o número era " + numeroPensado + "." + "<br><br><button onClick='window.location.reload()'>Tentar outra vez</button>" + "</h2>")
}

//função para sortear um número
function sorteia(n) {
    return Math.round(Math.random() * n) +1 //adicianar o número 100
}

//função para limpar o campo de tentativa
function limparTentativa() {
    let campo = document.getElementById("numeroChute");
    if(campo.value != ""){
        campo.value = "";
    }
}

const numeroMaximoTentativas = 11;
let numeroTentativas = 1;
let numeroPensado = sorteia(100);
console.log(numeroPensado)
let campoChute = document.getElementById("numeroChute");

campoChute.focus();

//função acionada pelo botão de adivinhar que verifica o número sorteado aleatóriamente
function verificaChute(){

    let chute = document.getElementById("numeroChute").value;
    chute = Number(chute);

    for(let i = 0; i <= numeroMaximoTentativas; i++){

        if(chute == numeroPensado) {
            if(numeroTentativas == 1){
                mostraConseguiuPrimeira();
                break;
            } else {
                mostraVoceConseguiu();
                break;
            }
            
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

    
//função para acionar o botão de adivinhar com a tecla enter
campoChute.addEventListener("keypress", function(cliqueEnter) {
    if(cliqueEnter.key === "Enter") {
        cliqueEnter.preventDefault();
        document.getElementById("botaoChute").click();
    }
});

