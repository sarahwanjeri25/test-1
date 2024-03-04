//question one

const mcquestions =[
    {
        question1:"Which one is a type of tag in HTML?",
        choices : ["A.Header","B.self-closing","C.variable","D.selector"],
        correctAnswer:"B"
    },
    {
        question:"The following are tyes of selectors in CSS except?",
        choices : ["A.Element","B.Type","C.Switch","D.Child"],
        correctAnswer:"C"
    },
    {
        question:"Which is a type of function in Javascript?",
        choices : ["A.function variable","B.function call","C.Function declaration","D.Function alert"],
        correctAnswer:"C"
    },
];


document.getElementById("question").innerText = question1.question;
document.getElementById("choiceA") .innerText = question1.options[0];
document.getElementById("choiceB") .innerText = question1.options[1];
document.getElementById("choiceC") .innerText = question1.options[2];
document.getElementById("choiceD") .innerText = question1.options[3];

function checkAnswer (userAnswer){
    if (userAnswer==question1.correctAnswer){
        alert ("correct");
    }else{
        alert(TryAgain)
    }
}



 let questionOne = "What are the three variables commonly used in javascript?"

 if (questionOne="var||const||let"){
    alert("correct")
 }else{
    alert("try again")
 }

 let questionTwo = "Give eamples of conditional statements in Javascript?"
 
    
     
    
