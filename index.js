var readLineSync = require('readline-sync');

// Adding a comment
var userName = readLineSync.question("Enter your username: ");
console.log("Welcome " + userName + " to Do you know the country capitals?")
console.log("--------------------------------------");


var userScore = 0;



function playCountryCapitalQuiz(question, answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Your answer is correct");
    userScore++;
  } else{
    console.log("Sorry wrong answer!");
  }

  console.log("--------------------------------------");
}




var questions = [{
  question: "What is the capital of USA? ",
  answer: "Washington D.C"
}, {
  question: "What is the capital of Mexico? ",
  answer: "Mexico City"
}, {
  question: "What is the capital of Canada? ",
  answer: "Ottawa"
}, {
  question: "What is the capital of Russia? ",
  answer: "Moscow"
}, {
  question: "What is the capital of France? ",
  answer: "Paris"
}, {
  question: "What is the capital of China? ",
  answer: "Beijing"
}, {
  question: "What is the capital of Afghanistan? ",
  answer: "Kabul"
}, {
  question: "What is the capital of Australia? ",
  answer: "Canberra"
}];



for(let index = 0; index < questions.length; index++){
  playCountryCapitalQuiz(questions[index].question, questions[index].answer);
}

console.log("Your final score is: " + userScore);
