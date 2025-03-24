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
document.addEventListener('click', function() {
    if (quizInputA.checked) {
        score++
        setText(quizLabel, "Correct!")
    } else {
        setText(quizLabel, "Incorrect! Esther entered through Ellis Island.")
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
        setText(quizLabel, "Correct!")
    } else {
        setText(quizLabel, "Incorrect! Hester Street is a center of Jewish life.")
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
        setText(quizLabel, "Correct!")
    } else {
        setText(quizLabel, "Incorrect! The word 'kvetch' means to complain.")
    }
})