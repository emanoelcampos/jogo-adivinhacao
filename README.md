# Jogo de adivinhação desenvolvido para praticar lógica de programação

## Consolidando meu conhecimento 
Este projeto consiste em criar um jogo de adivinhação onde o jogador deve tentar adivinhar um número aleatório gerado pelo computador dentro de um intervalo definido de 1 a 100. O jogo é desenvolvido em Javascript.

Durante a formação do curso de JavaScript e HTML da [Alura](https://cursos.alura.com.br/user/emanoelcampos), foi proposto um desafio aos participantes: desenvolver um jogo que possibilitasse a prática da lógica de programação por meio do Programa ONE da Oracle. O jogo foi criado ao longo das aulas, com atividades e exemplos de aprendizagem, e foi aperfeiçoado gradativamente à medida que novos conhecimentos foram sendo apresentados. Assim, durante todo o curso, o jogo foi sendo construído e melhorado, consolidando o aprendizado e oferecendo uma experiência prática e desafiadora para os estudantes.

### DESAFIOS

1 - Você pode criar uma função `sorteia` que recebe um número `n` e sorteia um número entre 0 a `n`, retornando esse valor. Dessa forma, em vez de escrever `let numeroPensado = Math.round(Math.random() * n);`, você escreveria `let numeroPensado = sorteia(n);`. Faça essa modificação, criando a nova função e utilize-a.

2 - Faça com que seu jogo mostre, quando o usuário errar a tentativa, se o número que ele chutou era maior ou menor ao número pensado pelo programa.

![](https://raw.githubusercontent.com/emanoelcampos/jogo-adivinhacao/master/site-images/front-page.png)

### Funcionalidades do Jogo:

- O jogador terá um número limitado de tentativas para adivinhar o número correto.
- A cada tentativa, o jogo informará ao jogador se o número escolhido está acima ou abaixo do número correto.
- O jogo termina quando o jogador acertar o número ou quando suas tentativas se esgotarem.
- Ao final do jogo, o jogador terá a opção de jogar novamente

### Vamos criar nosso primeiro jogo! A ideia é que seja um jogo de adivinhação!

Primeiramente, no arquivo jogo_adivinha.html, pedimos para o computador "pensar" em um número aleatório por meio do Math.random() e multiplicamos esse valor por 100, assim, teremos um número entre 0 e 100. Por fim, arredondamos o valor para obtermos um número inteiro.

Em seguida, perguntamos para o usuário "chutar" um número, ele deve tentar adivinhar o que o computador pensou. E com o número fornecido verificamos se o usuário estava certo.Uma mensagem deve ser mostrada caso o chute tenha sido errado. 

Ao abrir o programa no navegador, o usuário será questionado a adivinhar o número sorteado pela máquina. Logo em seguida o número que for fornecido deve ser testado e deve ser mostrado se o número escolhido é o mesmo que o computador pensou ou não.

Bom, até aqui foi fornecido o passo a passo de como proceder, agora seguem alguns desafios para você melhorar o programa. Tente chegar nas respostas e, após isso, compare com a opinião do instrutor!

