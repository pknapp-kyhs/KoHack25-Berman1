//question 1
document.createElement('quizLabel')
document.createElement('quizInputA')
document.createElement('quizInputB')
document.createElement('quizInputC')
setText(quizLabel, "Where did Esther enter America?")
setText(quizInputA, "Ellis Island")
setText(quizInputB, "Angel Island")
setText(quizInputC, "Southern Border")
var score = 0
var streak = 0
document.addEventListener('click', function() {
    if (quizInputA.checked) {
        score++
        streak++
        setText(quizLabel, "Correct!")
    } else {
        setText(quizLabel, "Incorrect! Esther entered through Ellis Island.")
        streak = 0
    }
})
//question 2
setText(quizLabel, "What is a central street to Jewish life?")
setText(quizInputA, "Mulberry Street")
setText(quizInputB, "Wall Street")
setText(quizInputC, "Hester Street")
document.addEventListener('click', function() {
    if (quizInputC.checked) {
        score++
        streak++
        setText(quizLabel, "Correct!")
    } else {
        setText(quizLabel, "Incorrect! Hester Street is a center of Jewish life.")
        streak = 0
    }
})
//question 3
setText(quizLabel, "What is a  Yiddish word meaning complain?")
setText(quizInputA, "Blurb")
setText(quizInputB, "Kvetch")
setText(quizInputC, "Fiets")
document.addEventListener('click', function() {
    if (quizInputB.checked) {
        score++
        streak++
        setText(quizLabel, "Correct!")
    } else {
        streak = 0
        setText(quizLabel, "Incorrect! The word 'kvetch' means to complain.")
    }
})
//calculating streak multiplier, score, and shekels earned
var streakMultiplier = 1 + (streak * 0.1);
shekel = shekel + score * streakMultiplier * 10 
setText(quizLabel, "Your score is: " + score + "\n" + "Your streak is: " + streak + "\n" + "You earned " + shekel + " shekels!")
//delete elements
document.deleteElement('quizLabel')
document.deleteElement('quizInputA')
document.deleteElement('quizInputB')
document.deleteElement('quizInputC')   


