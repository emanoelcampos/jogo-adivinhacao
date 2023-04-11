# Jogo de adivinhação desenvolvido para praticar lógica de programação

## Consolidando meu conhecimento 
Este projeto consiste em criar um jogo de adivinhação onde o jogador deve tentar adivinhar um número aleatório gerado pelo computador dentro de um intervalo definido de 1 a 100. O jogo é desenvolvido em Javascript.

Desafio proposto durante a formação do curso de JavaScript e HTML: desenvolva um jogo e pratique lógica de programação na [Alura](https://cursos.alura.com.br/user/emanoelcampos) por meio do Programa ONE da Oracle. O jogo começa a ser desenvolvido durante aulas como atividades de aprendizagem e aperfeiçoado durante o curso aula a aula conforme novos conhecimentos são ensinados. 

#### Jogue agora e descubra se você é bom em [adivinhação](https://emanoelcampos.github.io/jogo-adivinhacao/)

![](https://raw.githubusercontent.com/emanoelcampos/jogo-adivinhacao/master/site-images/front-page.png)

### Vamos criar nosso primeiro jogo! A ideia é que seja um jogo de adivinhação!

Primeiramente, no arquivo jogo_adivinha.html, pedimos para o computador "pensar" em um número aleatório por meio do Math.random() e multiplicamos esse valor por 100, assim, teremos um número entre 0 e 100. Por fim, arredondamos o valor para obtermos um número inteiro. Teremos o seguinte código:

```
<meta charset="UTF-8">
<script>
    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(mensagem) {

        document.write(mensagem);
        pulaLinha();
    }

    let numeroPensado = Math.round(Math.random() * 100);
</script>
``` 

Em seguida, perguntamos para o usuário "chutar" um número, ele deve tentar adivinhar o que o computador pensou. E com o número fornecido verificamos se o usuário estava certo.

```
<meta charset="UTF-8">
<script>

    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(mensagem) {

        document.write(mensagem);
        pulaLinha();
    }

    let numeroPensado = Math.round(Math.random() * 100);

    let chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

    if(chute == numeroPensado) {

        mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
    }
</script>
```

Uma mensagem deve ser mostrada caso o chute tenha sido errado. Por isso, utilizamos o else:

```
<meta charset="UTF-8">
<script>

    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(mensagem) {

        document.write(mensagem);
        pulaLinha();
    }

    let numeroPensado = Math.round(Math.random() * 100);

    let chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

    if(chute == numeroPensado) {

        mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
    } else {

        mostra("Você errou! Eu tinha pensado no " + numeroPensado);
    }
</script>
```


Ao abrir o programa no navegador, o usuário será questionado a adivinhar o número sorteado pela máquina. Logo em seguida o número que for fornecido deve ser testado e deve ser mostrado se o número escolhido é o mesmo que o computador pensou ou não.

Bom, até aqui foi fornecido o passo a passo de como proceder, agora seguem alguns desafios para você melhorar o programa. Tente chegar nas respostas e, após isso, compare com a opinião do instrutor!

### DESAFIOS

1 - Você pode criar uma função `sorteia` que recebe um número `n` e sorteia um número entre 0 a `n`, retornando esse valor. Dessa forma, em vez de escrever `let numeroPensado = Math.round(Math.random() * n);`, você escreveria `let numeroPensado = sorteia(n);`. Faça essa modificação, criando a nova função e utilize-a.

2 - Faça com que seu jogo mostre, quando o usuário errar a tentativa, se o número que ele chutou era maior ou menor ao número pensado pelo programa.
