let score = 0;
let currentQuestionIndex = 0;

// objects in {}, properties:
let questions =  [
    {
        question: "Who composed the 'Moonlight Sonata'?",
        answers: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Frederic Chopin"],
        correctAnswer: 1
    },
    {
        question: "What is the term for a piece of music where a solo instrument is supported by an orchestra?",
        answers: ["Sonata", "Symphony", "Concerto", "Operetta"],
        correctAnswer: 2
    },
    {
        question: "Which of these instruments is a member of the woodwind family?",
        answers: ["Viola", "Trombone", "Oboe", "Cello"],
        correctAnswer: 2
    },
    {
        question: "In which country did the samba music genre originate?",
        answers: ["Argentina", "Spain", "Brazil", "Cuba"],
        correctAnswer: 2
    },
    {
        question: "What is the musical term for gradually getting louder?",
        answers: ["Allegro", "Crescendo", "Fortissimo", "Andante"],
        correctAnswer: 1
    }
];
document.getElementById("numQuestions").textContent = questions.length;


function displayQuestion(){
    if (currentQuestionIndex >= questions.length){
        document.getElementById("quiz-container").hidden = true;
        document.getElementById("result").hidden = false;
        document.getElementById("score").textContent = score;
        return;
    }
    let question = questions[currentQuestionIndex];

    document.getElementById("question").textContent = question.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement("button");
        answerButton.classList.add("btn", "btn-dark", "me-2");
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}

displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (userAnswer == correctAnswer){
        score += 1;
    }
   

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex+=1;
    displayQuestion();
}
