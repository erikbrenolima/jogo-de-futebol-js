// primeiro a função do programa
function futebol() {

    /*
    declarando os times como objetos
    pondo itens e suas propriedades para vermos seus valores posteriormente
    */

    let time1 = {
        nome: "Bahia",
        jogadores: 5,
        placar: 0
    };
    let time2 = {
        nome: "Vitória",
        jogadores: 5,
        placar: 0
    };

    //primeira função que diz as informações do time quando requerido pela variável escolha()
    function infoTime1() {
        alert(`Times disponíveis:

    nome:
    ${time1.nome}

    quantidade de jogadores atualmente: 
    ${time1.jogadores}  

    gols ja feitos:
    ${time1.placar}`);
    };
    //segunda função que diz as informações do time quando requerido pela variável escolha()
    function infoTime2() {
        alert(`Times disponíveis:
    
    nome:
    ${time2.nome}
    
    quantidade de jogadores atualmente: 
    ${time2.jogadores}  
    
    gols ja feitos:
    ${time2.placar}`);
    };

    // essa função serve pra perguntar ao usuario se ele quer utilizar o programa novamente
    function restart() {
        let dnv = parseInt(prompt(`deseja ver as funções novamente?
1 - sim
2 - nao`));
        if (dnv === "sim" || 1) {
            futebol();
        } else {
            alert("Obrigada por ter acessado :)");
        }
    };

    function instrucoes() {
        alert("basicamente funciona assim: você responde umas perguntas e dependendo da resposta, seu time perde ou ganha :)");
    }

    function comecar() {
    alert(`Bem vindo ao jogo de futebol que na verdade é uma gincaninha legal.
Aqui você vai responder perguntas simples de sim ou não e o computador irá guardar as informações e averiguar :)
Vamos começar!`);
        let perguntaUm = parseInt(prompt(`primeira pergunta:
qual é a cor do céu?
1 - azul
2 - preto
    `));
        let perguntaDois = parseInt(prompt(`segunda pergunta:
a grama é verde?
1 - sim
2 - não
    `));
        let perguntaTres = parseInt(prompt(`terceira pergunta:
você me ama?
1 - sim
2 - não
    `));

        let acertos = 0;
        if (perguntaUm === 1){acertos++;};
        if (perguntaDois === 1){acertos++;};
        if (perguntaTres === 1){acertos++;};
        switch (acertos) {
            case 1:
                alert(`parabens você acertou ${acertos} questão de 3`);
                break;
            case 2:
                alert(`parabens você acertou ${acertos} questões de 3`);
                break;
            case 3:
                alert(`que legal ! você gabaritou e acertou ${acertos} de 3 questôes :)`);
                break;
            default:
                alert(`que pena ! :( você acertou ${acertos} questôes de todas`);
                break;
        }
        restart();
    }
    // essa variável pede um input pra interação no menu
    let escolha = parseInt(prompt(`seja bem vindo!
selecione uma opção:
1 - times disponíveis
2 - como funciona esse jogo?
3 - créditos
4 - iniciar
5 - sair`));
    switch (escolha) {
        case 1:
            infoTime1();
            infoTime2();
            restart();
            break;
        case 2:
            instrucoes();
            restart();
            break;
        case 3:
            alert(`Programadora: lucy eris
            IDE usada: Visual Studio Code
            Linguagem usada: javascript`.toLocaleLowerCase());
            restart();
            break;
        case 4:
            comecar();
            break;
        case 5:
            alert("Obrigada por ter acessado :)");
            break;
        default:
            alert("preciso de um valor correto !");
            restart();
    }
}

futebol();