const questions = [
    {
        question : "Como o diabetes pode ser identificada?", 
        hint    : "Este teste avalia como o corpo processa a glicose após a ingestão de uma quantidade padronizada de açúcar.",
        answers  : [
            { text: "A) Exame urinario e Exame parasitológico de fezes.", correct : false},
            { text: "B) Testes de dosagem de glicose no sangue e o teste de tolerância oral à glicose.", correct : true},
            { text: "C) Eletrocardiograma e Ecocardiograma.", correct : false},
            { text: "D) Exames de ultrassonografia e exames cocardiograma bidimensional com doppler.", correct : false},
        ]
    },
    {
        question : "Como controlar o diabetes?", 
        hint    : "Um dos principais fatores de risco para o desenvolvimento da diabetes estão a obesidade e sedentarismo.",
        answers  : [
            { text: "A) Consumir altas quantidades de açucares e praticar exercícios fisicos.", correct : false},
            { text: "B) Devem ter uma dieta muito pobre em hidratos de carbono.", correct : false},
            { text: "C) Ter uma alimentação saudável, beber bastante água e praticar exercícios.", correct : true},
            { text: "D) Devem ter uma dieta especial, muito específica para a Diabetes e beber pouca água.", correct : false},
        ] 
    },
    {
        question : "Quais os riscos de não tratar o diabetes?", 
        hint    : "O diabetes, quando não controlado, pode trazer consequências negativas para a visão, rins, coração, nervos e membros inferiores, além de provocar desidratação e complicações respiratórias.",
        answers  : [
            { text: "A) Desidratação severa, dificuldades respiratórias, vômitos e até o coma.", correct : true},
            { text: "B) O aparecimento de manchas vermelhas na pele, sangramentos (nariz, gengivas), e dor abdominal intensa.", correct : false},
            { text: "C) Cansaço persistente, suores noturnos, perda involuntária de peso, febre e diarreia.", correct : false},
            { text: "D) febre alta, icterícia (coloração amarelada da pele e do branco dos olhos), hemorragia e, eventualmente, choque e insuficiência de múltiplos órgãos.", correct : false},
        ]
    },
    {
        question : "Quem tem o maior risco de ter diabetes?", 
        hint    : "Pessoas com histórico familiar, maus hábitos alimentares e sedentarismo.",
        answers  : [
            { text: "A) Indivíduos com histórico familiar de Diabetes.", correct : false},
            { text: "B) Adultos que têm pressão arterial elevada, colesterol LDL e triglicéridos elevados.", correct : false},
            { text: "C) Indivíduos com excesso de peso ou obesidade.", correct : false},
            { text: "D) Todas as respostas anteriores.", correct : true},
        ]
    },
    {
        question : "Quem tem diabetes tipo 2 pode virar tipo 1.",
        hint    : "Diabetes tipo 1 ocorre redução ou falta de produção de insulina, já a diabetes tipo 2, o organismo desenvolve uma resistência à ação desse hormônio.", 
        answers  : [
            { text: "A) Falso.", correct : true},
            { text: "B) Verdadeiro.", correct : false},
        ]
    },
    {
        question : "Qual a melhor forma de prevenir a Diabetes tipo 2?",
        hint    : "Controlar a tensão arterial e o colesterol LDL é muito importante para evitar problemas cardiovasculares independentemente de se ter ou não diabetes.",
        answers  : [
            { text: "A) Monitorizar e controlar a pressão arterial.", correct : false},
            { text: "B) Monitorizar e controlar o colesterol LDL.", correct : false},
            { text: "C) Manter o peso controlado.", correct : true},
            { text: "D) Nenhuma das respostas anteriores.", correct : false},
        ]
    },
    {
        question : "É possível acabar com a diabetes tipo 2.",
        hint    : "",
        answers  : [
            { text: "A) Falso.", correct : true},
            { text: "B) Verdadeiro.", correct : false},
        ]
    },
    {
        question : "O que é Cetoacidose diabética?",
        hint    : "A cetoacidose diabética pode ser precipitada por infecção ou algum tipo de fatores estressores como, infarto agudo do miocárdio, acidente vascular encefálico, trauma, etc.",
        answers  : [
            { text: "A) Uma lesão interna endurecida e mais profunda, inflamada e com sebo dentro", correct : false},
            { text: "B) É uma secreção de cor amarelada, ou amarelo-esverdeada, frequentemente malcheirosa, produzida em consequência de um processo de infecção bacteriana extracelular", correct : false},
            { text: "C) Complicação grave que ocorre quando o corpo produz ácidos sanguíneos (cetonas) em excesso", correct : true},
            { text: "D) Condição na qual as cavidades ao redor das vias nasais inflama.", correct : false},
        ]
    },
    {
        question : "Quais os sintomas da diabetes tipo 2 quando está alta?",
        hint    : "Acaba impactando nas nescessidades basicas.",
        answers  : [
            { text: "A) Febre, fraqueza, inapetência e diarreia.", correct : false},
            { text: "B) Febre alta, calafrios, tremores e dores de cabeça, que podem ocorrer de forma cíclica.", correct : false},
            { text: "C) Fome frequente, formigamento nos pés e mãos, feridas que demoram para cicatrizar e vontade de urinar diversas vezes.", correct : true},
            { text: "D) Dor nas articulações, vermelhidão ou hemorragia conjuntival, fotofobia e dor ocular.", correct : false},
        ]
    },
];

// h1 onde vai a pergunta (h1)
const questionElement = document.getElementById("question");
// div onde esta as alternativas
const answerButtons = document.getElementById("answer-buttons");
// Botão de proximo
const nextButton = document.getElementById("next-btn");
// onde ficará a pergunta e as imagens
const header = document.getElementById("header");

const imagen = document.getElementById("img");
// espaço onde vai a dica
const hint = document.getElementById("hint");
//botao dica
const hintBtn = document.getElementById("btnh");
// 
const footer = document.getElementById("footer");

// variaveris do index da questão
let currentQuestionIndex = 0;
// variavel da pontuação
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    // nome do botão de proxima pergunta
    nextButton.innerHTML = "Proxima";
    shuffle(questions);
    showQuestion();
};
function showQuestion(){
    resetState();
    // createImg();
    // variavel para armazenar a array com as questões
    let currentQuestion = questions[currentQuestionIndex];
    // variavel para adicionar mais 1 numero no index do array
    let questionNo = currentQuestionIndex + 1;
    //Adicionar a pergunda ao HTML
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question
    
    
    // para cada resposta no objeto
    currentQuestion.answers.forEach(answer => {
        // variavel que cria um botão dentro do HTML
        const button = document.createElement("button")
        //colocar as Alternativas nos botões
        button.innerHTML = answer.text;
        //define as classes dos botões como "btn"
        button.classList.add("btn");
        // chama a variavel para criar com filho da DIV "answer-buttons"
        answerButtons.appendChild(button);
        // verifica se clicou na resposta correta
        if(answer.correct){
            // se sim, define o valor como correto
            button.dataset.correct = answer.correct;
        }
        
        // adiciona um evento ao botão e chama a função selectAnswer
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    // define o display como nenhum(botão desaparece)
    nextButton.style.display = "none";
    // remove os botões antigos para que possa ser substituidos pelos novos com as alternativas
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    // variavel para receber o valor de qual botão foi clicado
    const selectedBtn = e.target;
    // variavel para receber o valor do botão que for "true"
    const isCorrect = selectedBtn.dataset.correct === "true";
    // se o valor for "true", ira ser colocado a class="correct" do css
    if(isCorrect){
        // adiciona a class="correct" a alternativa
        selectedBtn.classList.add("correct");
        // aumenta a variavel da pontuação
        score += 100;
    }else{
        // coloca a class="incorrect" na alternativa
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        // vai verificar qual é o botão que tem o valor "true" e definir ele como "correct"
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        // desabilita os botões não podendo clickar neles
        button.disabled = true;
    });
    //define o display do botão "proxima" como block
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    // muda o h1 da questão para a pontuação
    questionElement.innerHTML = 'Você pontuou ' +score+ ' de '+questions.length*100+'!';
    // define o botão de "proximo" como jogar novamente
    nextButton.innerHTML = "Jogar novamente";
    // define o display do botão "proximo" como block
    nextButton.style.display = "block";
    imagen.style.display = "none"
}
// ao segurar o botão de proximo
function handleNextButton(){
    // aumentar o index da questão
    currentQuestionIndex++;
    // verifica se o index é maior que o tamanho da array com os objetos das perguntas
    if(currentQuestionIndex < questions.length){
        // se não chama a função de mostrar as perguntas
        showQuestion();
    }else{
        // se for maior chama a função de mostrar a pontuação
        showScore();
    }
}

// adiciona um evento quando "click" for chamado chama a arrow function
nextButton.addEventListener("click", ()=> {
    // verifica se o index das questões é menor que o tamanho da array
    if(currentQuestionIndex < questions.length){
        // se for menor define a função do botão "proximo" para passar para a proxima questão 
        handleNextButton()
    }else{
        // se for maior a função do botão "proximo" vai ser iniciar o quiz novamente; 
        startQuiz()
    }
})

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // enquanto existir elementos para trocar
    while (currentIndex != 0) {
  
      // pegar um elemento que falta para trocar
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // troca os elementos  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
function help(){
    let currentQuestion = questions[currentQuestionIndex];
    if(hintBtn.click){
        hint.innerText = currentQuestion.hint
    }
}
startQuiz();