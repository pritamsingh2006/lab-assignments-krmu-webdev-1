const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "In JavaScript, which keyword is used to declare a variable?", answer: "let" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Which company created JavaScript?", answer: "netscape" }
];


function runQuiz() {

    
    let score = 0;

    
    for (let i = 0; i < quizQuestions.length; i++) {

        
        let userAnswer = prompt(quizQuestions[i].question);

        
        if (userAnswer === null) {
            console.log("Quiz cancelled.");
            return;
        }

        
        userAnswer = userAnswer.toLowerCase().trim();

        
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            
            console.log("Correct!");
        } else {
            console.log("Wrong! The correct answer is:", quizQuestions[i].answer);
        }
    }

    
    console.log(`Quiz Over! You scored ${score} out of ${quizQuestions.length}`);
}


runQuiz();