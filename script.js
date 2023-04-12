
var quizContent = [ //defines a variable array that  contains all quiz questions
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
 var paragraph=document.getElementById("question"); //defines paragraph variable as html #question (line 15 in HTML)
 var answerOptions = document.getElementById("button"); //defines answerOptions variable as html #button (line 16)

function quizQuestions (assess){ //defining function quizQuestion with the parameter assess 
 var question = assess.text //defines question as the output of assess after running text object from quizContent (?)
 //var choices = assess.choices//repeat of above but with choices
 paragraph.textContent = question //question will be printed in #paragraph div
//  assess.choices.map((choice)=>{
//     var btn = answerOptions.appendChild(document.createElement("button"));
//     btn.textContent=choice;
// })
}


// function handleClick (event){
//  console.log("clicked");
// }

//answerOptions.addEventListener("click", handleClick);

function showContent (){ //defines function showContent - adding because I think that I will need more than just for statement to change between questions
    for (i=0; i<3; i++){
//    var answer = quizContent[i].answer
//     if (i!=0) {
//   //      for (var j=0; j<4; j++) {
//     //        answerOptions.removeChild("button");
//       //  }
//     }
   quizQuestions(quizContent[i]) //this shows the very last question. I can change this to 0,1,2, 0+1, i+1 (goes back to end) maybe write a new function? 
    //paragraph.textContent = questions.text;
};
}

showContent ()