const questions = [
    {
        question : "A candidíase oral, ou candidose, é uma infecção fúngica. Exibe uma variedade de padrões clínicos, e a mais bem reconhecida é Candidíase pseudomembranosa (ou sapinho). As características da apresentação dessa doença são:", 
        hint    : "Este teste avalia como o corpo processa a glicose após a ingestão de uma quantidade padronizada de açúcar.",
        VF    : 'false',
        answers  : [
            { text: "A) vesículas avermelhadas, localizadas na região dos lábios e palato.", correct : false},
            { text: "B) placas brancas não destacáveis, localizadas na mucosa jugal anterior.", correct : false},
            { text: "C) lesões fissuradas avermelhadas, localizadas na região de comissura labial.", correct : false},
            { text: "D) áreas atróficas e vermelhas, localizadas na região posterior do dorso lingual", correct : false},
            { text: "E) placas brancas, cremosas, destacáveis, localizadas na mucosa jugal, língua e palato.", correct : true},
        ]
    },
    {
        question : "Qual medicamento é o tratamento para candidíase?", 
        hint    : "Este teste avalia como o corpo processa a glicose após a ingestão de uma quantidade padronizada de açúcar.",
        VF    : 'false',
        answers  : [
            { text: "A) Anti-inflamatório", correct : false},
            { text: "B) Antifúngico", correct : true},
            { text: "C) Sedativo", correct : false},
            { text: "D) Analgésico", correct : false},
        ]
    },
    {
        question : "Sobre os sintomas da candidíase oral, marque verdadeiro ou falso:", 
        hint    : "Este teste avalia como o corpo processa a glicose após a ingestão de uma quantidade padronizada de açúcar.",
        VF    : 'true',
        answers  : [
            { text: "Mau hálito ou secura", correct : true},
            { text: "Não tem sintomas visíveis", correct : false},
            { text: "A candidíase, mais conhecida como “sapinho” provoca lesões brancas na língua ou na parte interna das bochechas.", correct : true},
            { text: "Dores e amolecimento nos dentes, e na gengiva ", correct : false},
            { text: "Lesões avermelhadas como aftas", correct : true},
            { text: "Anormalidade no paladar, dificuldade em engolir, lesão ou vermelhidão", correct : true},
        ]
    },
    {
        question : "A candidíase oral pode ser diagnóstica por quais profissionais?", 
        hint    : "Este teste avalia como o corpo processa a glicose após a ingestão de uma quantidade padronizada de açúcar.",
        VF    : 'false',
        answers  : [
            { text: "A) Clínico geral e farmacêutico", correct : false},
            { text: "B) Somente um farmacêutico", correct : true},
            { text: "C) Clínico geral, dentista ou pediatra no caso de crianças", correct : true},
            { text: "D) Apenas o Clínico geral", correct : false},
        ]
    },
    {
        question : "As infecções da candidíase oral podem acontecer em grupos específicos. Portanto, pode-se afirmar que existe um grande leque de fatores predisponentes e que podem, até mesmo, acontecer mutuamente. Dessa forma, quais pacientes dos seguintes grupos estão mais vulneráveis? Assinale Verdadeiro ou Falso", 
        hint    : "Este teste avalia como o corpo processa a glicose após a ingestão de uma quantidade padronizada de açúcar.",
        VF    : 'true',
        answers  : [
            { text: "Pessoas com HIV/AIDS", correct : true},
            { text: "Imaturidade imunológica da infância", correct : true},
            { text: "Pessoas com uma saúde bucal em dias", correct : false},
            { text: "Pessoas com higiene precária", correct : true},
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
// espaço onde ficara os pontos no HTML
const pontos = document.getElementById("score");

// variaveris do index da questão
let currentQuestionIndex = 0;
// variavel da pontuação
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    // nome do botão de proxima pergunta
    nextButton.innerHTML = "Proxima";
    //shuffle(questions);
    showQuestion();
};
function showQuestion(){
    resetState();
    // variavel para armazenar a array com as questões
    let currentQuestion = questions[currentQuestionIndex];
    // variavel para adicionar mais 1 numero no index do array
    let questionNo = currentQuestionIndex + 1;
    //Adicionar a pergunda ao HTML
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question
    
    
    // para cada resposta no objeto
    currentQuestion.answers.forEach(answer => {
        // variavel que cria um botão dentro do HTML
        const button = document.createElement("input");
        const paragrafo = document.createElement("p");
        const div = document.createElement("div");
        //colocar as Alternativas nos botões
        //button.innerHTML = answer.text;
        // chama a variavel para criar com filho da DIV "answer-buttons"

        if(currentQuestion.VF == 'false'){
            answerButtons.appendChild(button);
            button.setAttribute("type", 'button');
            button.setAttribute("value", answer.text);
            button.classList.add("btn");
            paragrafo.style.display = "none"
        }else{
            answerButtons.appendChild(div);
            div.classList.add("alinhar");
            div.appendChild(button);
            button.setAttribute("type", "checkbox");
            button.classList.add("btn-check");
            div.appendChild(paragrafo);
            paragrafo.classList.add("paragrafo");
            paragrafo.innerHTML = answer.text;

        }
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
    //nextButton.style.display = "none";
    // remove os botões antigos para que possa ser substituidos pelos novos com as alternativas
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// MUDAR ESSE FUNÇÃO PARA QUANDO CLICAR NO BOTAO DE "PROXIMO" ELE VERIFICAR SE ESTA CORRETO
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
        pontos.innerHTML = "Pontuação: " + score;
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
  let open = false;
function help(){
    let currentQuestion = questions[currentQuestionIndex];
    if(open == false){
        hint.innerText = currentQuestion.hint
        open = true;
        hint.style.background = "cyan";
    }else{
        hint.innerHTML = "";
        open = false;
    }
}
startQuiz();