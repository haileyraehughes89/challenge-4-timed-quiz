
var quizContent = [ //defines a variable array that  contains all quiz questions
    {
        text: "What color is the sky?",
        choices: ["blue", "purple", "yellow", "green"],
        answer: "blue"
        
    },
   {
        text: "Is the ocean made of water?",
        choices: ["yes", "no"],
        answer: "yes"
        
   },
   {
    text: "What is the sum of 1 and 2?",
    choices: ["1", "2", "3", "4"],
    answer: "3"
},
 ];


 var paragraph=document.getElementById("question"); 
 var answerOptions = document.getElementById("button");
 var initials = document.getElementById("submission");
 var startContainer = document.getElementById("startQuiz");

 var score = 0
 var currentIndex = 0

function startMenu () {
    var startButton = document.createElement("button")
    startButton.textContent = "Start"
    startContainer.appendChild(startButton);
    startButton.addEventListener("click", startQuiz)
    
}

function startQuiz () {
    startContainer.remove()
    takeQuiz(quizContent[0])
}
 function takeQuiz(assess){ 
    var question = assess.text  
        paragraph.textContent = question
    var selection = assess.choices
    var correctAnswer = assess.answer
    var start =
        answerOptions.innerHTML = "" //this clears answerOptions element before generating new question
        selection.forEach((selection)=>{
       
        var btn = answerOptions.appendChild(document.createElement("button"));
        btn.textContent=selection;      

            btn.addEventListener ("click", function finalGrade() {
                rightAnswer = false
            
                if (btn.textContent === correctAnswer) {
                    console.log("correct"), rightAnswer= true;
                } else { console.log("incorrect")}
                     
                if (rightAnswer) { score++; console.log("add point"
                )
                } else {console.log("no score change")}
                
            })
            btn.addEventListener("click",function move(){
                var next = quizContent.indexOf(assess) + 1;
                currentIndex++;
                percentCorrect = score/quizContent.length*100;
                var roundedPercent = Math.round(percentCorrect);
            if (currentIndex < quizContent.length) {
                quiz(quizContent[next])}
            else{
            answerOptions.innerHTML = "";
            paragraph.textContent="Quiz complete! You answered " + score + " questions correctly, out of the " + quizContent.length + " on the quiz. This is a " + roundedPercent + "%. Please submit your initials.";
            var inits = document.createElement('input');
            var submit = document.createElement('button');
            submit.textContent= "Submit"
            inits.setAttribute("placeholder", "a;lskdfj");
            document.body.appendChild(inits);
            document.body.appendChild(submit);
            submit.addEventListener("click",function submitInitials () {
                var loggedInits = inits.value.trim();
                console.log("submit working");
             localStorage.setItem("initials", loggedInits);
              localStorage.setItem("score", roundedPercent);

             })
            }
        })
    })
}
startMenu()


