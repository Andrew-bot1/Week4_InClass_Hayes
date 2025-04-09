"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Andrew Hayes
      Date:   4/9/25

      Filename: project05-01.js
*/

//declare time variable


// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");



//countdown function
function countdown() {
   //see if time is equal to zero
   if (timeLeft == 0) {
      //clear interval
      clearInterval(timeID);
      //declare total correct variable
      let totalCorrect=checkAnswers();

      //check to see if user got 100
      if (totalCorrect==correctAnswers.length) {
         window.alert("You got a 100%!")
         //change value of timeleft
      }
   }
}

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;
let questionList = document.querySelectorAll("div#quiz input");
// and the node list for questions


//add onclick event to timeID to enter function
startQuiz.onclick = function() {
   //change quizTime to count down
   overlay.ClassName="showquiz";
   timeID=window.setInterval(countdown, 1000);
}

//countdown function
function countdown() {
   //see if time is equal to zero
   if (timeLeft == 0) {
      //clear interval
      clearInterval(timeID);
      //declare total correct variable
      let totalCorrect=checkAnswers();

      //check to see if user got 100
      if (totalCorrect==correctAnswers.length) {
         window.alert("You got a 100%!")
         
      }
   

      else {
         //change value of timeleft
         timeLeft=quizTime
         quizClock.value=timeLeft
         overlay.className="hidequiz"
         window.alert("You got " +totalCorrect+ " out of " + 
            correctAnswers.length + "questions correct")
         }
      }
   else {
      timeLeft--;
      quizclock.value=timeLeft;
   }
}






/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}
