
var output = document.getElementById("output");


console.log("begin");

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
 var paragraph=document.createElement('h2');
for (i=0; i<3; i++){ 

var question = quizContent[i];
var print = question['text'];
paragraph.append(print);
//paragraph.textContent = questions.text;
};
output.appendChild(paragraph);