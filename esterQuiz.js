//creating the elements for the quiz
question = document.createElement('output');
answerA = document.createElement('button');
answerB = document.createElement('button');
answerC = document.createElement('button');

document.body.appendChild(question);
document.body.appendChild(answerA);
document.body.appendChild(answerB);
document.body.appendChild(answerC);
//creating variables for score, streak, and shekels (shekels are the currency of the game)
var score = 0
var streak = 0
var shekel = 0

questionOne()
//function to create the first question
function questionOne() {
    question.textContent = "Where did Esther enter America?"
    answerA.textContent = "Ellis Island"
    answerB.textContent = "Angel Island"
    answerC.textContent = "Southern Border"
    ///making the buttons clickable
    answerA.addEventListener('click', function() {
        score++
        streak++
        question.textContent = "Correct!"
        setTimeout(function() { questionTwo(); }, 1000);
    })
    answerB.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Esther entered through Ellis Island."
        setTimeout(function() { questionTwo(); }, 1000);
    })
    answerC.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Esther entered through Ellis Island."
        setTimeout(function() { questionTwo(); }, 1000);
    })
}
//function to create the second question
function questionTwo() {
    question.textContent = "What is a central street to Jewish life??"
    answerA.textContent = "Mulberry Street"
    answerB.textContent = "Wall Street"
    answerC.textContent = "Hester Street"
    answerA.disabled = false
    answerB.disabled = false
    answerC.disabled = false
    answerC.addEventListener('click', function() {
        score++
        streak++
        question.textContent = "Correct!"
        answerA.disabled = true
        answerB.disabled = true
        answerC.disabled = true
        setTimeout(function() { questionThree(); }, 1000);
    })
    answerB.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Hester Street is a center of Jewish life."
        answerA.disabled = true
        answerB.disabled = true
        answerC.disabled = true
        setTimeout(function() { questionThree(); }, 1000);
    })
    answerA.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Hester Street is a center of Jewish life."
        answerA.disabled = true
        answerB.disabled = true
        answerC.disabled = true
        setTimeout(function() { questionThree(); }, 1000);
    })
}
//function to create the third question
function questionThree() {
    question.textContent = "What is the Yiddish word for complain?"
    answerA.textContent = "Fietz"
    answerB.textContent = "Kvetch"
    answerC.textContent = "Blurb"
    answerA.disabled = false
    answerB.disabled = false
    answerC.disabled = false
    answerB.addEventListener('click', function() {
        score++
        streak++
        question.textContent = "Correct!"
        answerA.disabled = true
        answerB.disabled = true
        answerC.disabled = true
        setTimeout(function() { questionsEnd(); }, 1000);
    })
    answerC.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Kvetch is the Yiddish word for complain."
        answerA.disabled = true
        answerB.disabled = true
        answerC.disabled = true
        setTimeout(function() { questionsEnd(); }, 1000);
    })
    answerA.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Kvetch is the Yiddish word for complain."
        answerA.disabled = true
        answerB.disabled = true
        answerC.disabled = true
        setTimeout(function() { questionsEnd(); }, 1000);
    })
}
///function to end the quiz and display the score, plus how many shekels were earned
function questionsEnd() {
    shekel += score * 10
    question.textContent = "You have finished the quiz! Your score is " + score + " out of 3. You earned " + shekel + " shekels.";
    answerA.disabled = true
    answerB.disabled = true
    answerC.disabled = true
}
