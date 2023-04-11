
var quizContent = [
    {
        text: "What color is the sky?",
        choices: ["blue", "purple", "yellow", "green"],
        answer: "blue"
    },
   {
        text: "What color is the grass?",
        choices: ["blue", "purple", "yellow", "green"],
        answer: "green"
   },
   {
    text: "What color is the sun?",
    choices: ["blue", "purple", "yellow", "green"],
    answer: "yellow"
},
 ];
 var paragraph=document.getElementById("question");
 var answerOptions = document.getElementById("button");

function quizQuestions (assess){
 var question = assess.text
 var choices = assess.choices
 paragraph.textContent = question
 assess.choices.map((choice)=>{
    var btn = answerOptions.appendChild(document.createElement("button"));
    btn.textContent=choice;
 })
}


function handleClick (event){
 console.log("clicked");
}

answerOptions.addEventListener("click", handleClick);

for (i=0; i<3; i++){
   var answer = quizContent[i].answer
    if (i!=0) {
        for (var j=0; j<4; j++) {
            answerOptions.removeChild("button");
        }
    }
    quizQuestions(quizContent[i])
    //paragraph.textContent = questions.text;
};