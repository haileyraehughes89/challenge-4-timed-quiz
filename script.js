
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
 var score = 0
function quiz(assess){ 
    var question = assess.text  
        paragraph.textContent = question
    var selection = assess.choices
    var correctAnswer = assess.answer

        answerOptions.innerHTML = "" //this clears answerOptions element before generating new question
        selection.forEach((selection)=>{
       
        var btn = answerOptions.appendChild(document.createElement("button"));
        btn.textContent=selection;

            btn.addEventListener("click",function move(){
                var next = quizContent.indexOf(assess) + 1;
                quiz(quizContent[next])  
            // if (next > quizContent.length) {
            //         console.log("Quiz complete! Final score");
            //     }
            })

            btn.addEventListener ("click", function correct() {
                rightAnswer = false
            
                if (btn.textContent === correctAnswer) {
                    console.log("correct"), rightAnswer= true;
                } else { console.log("incorrect")}
                
                
                if (rightAnswer) { score++; console.log("add point"
                )
                } else {console.log("no score change")}

            console.log(score);
                
            })
           
        })
    }
//answerOptions.addEventListener("click", handleClick);
function showContent (){
     //this shows the very last question. I can change this to 0,1,2, 0+1, i+1 (goes back to end) maybe write a new function?
    for (i=1; i<quizContent.length-1; i++){
        
         quiz(quizContent[0])
};
}
showContent ();

