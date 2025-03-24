function esther() {
    //create elements
    document.createElement('infoText')
    

    var score = 0
    var streak = 0
    var shekel = 0
    let language = false
    let life = false
    let journey = false
    language0()
    questionOne()
    questionTwo()
    questionThree()
}
//question 1
    function questionOne() {
        document.createElement('quizLabel')
        document.createElement('quizInputA')
        document.createElement('quizInputB')
        document.createElement('quizInputC')
        setText(quizLabel, "Where did Esther enter America?")
        setText(quizInputA, "Ellis Island")
        setText(quizInputB, "Angel Island")
        setText(quizInputC, "Southern Border")
        document.quizInputB.addEventListener('click', function() {
                setText(quizLabel, "Incorrect! Esther entered through Ellis Island.")
                streak = 0
        })
        document.quizInputC.addEventListener('click', function() {
                setText(quizLabel, "Incorrect! Esther entered through Ellis Island.")
                streak = 0
        })
        document.quizInputA.addEventListener('click', function() {
                score++
                streak++
                setText(quizLabel, "Correct!")
        })
    }
    //question 2
    function questionTwo() {
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
    }
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
    shekel = shekel + score * streakMultiplier * 100 
    setText(quizLabel, "Your score is: " + score + "\n" + "Your streak is: " + streak + "\n" + "You earned " + shekel + " shekels!")
    //delete elements
    document.deleteElement('quizLabel')
    document.deleteElement('quizInputA')
    document.deleteElement('quizInputB')
    document.deleteElement('quizInputC')   

    function language0() {  
        // Remove any existing event listeners before adding new ones
        removeEventListeners();
        // Reset the explainBox if it was removed
        if (!document.body.contains(explainBox)) {
            explainBox = document.createElement('output');
            document.body.appendChild(explainBox);
        }
        explainBox.textContent = "Language: Press Space to Continue"
        document.addEventListener('keydown', continueLanguage0)
    }
    function continueLanguage0(event) {
        if (event.key == ' ') {
            language1()
        }
    }   
    
    function continueLanguage1(event) {
        if (event.key == ' ') {
            language2()
        }
    }

    function continueLanguage2(event) {
        if (event.key == ' ') {
            document.addEventListener('keydown', endLanguage);
            explainBox.textContent = "Language complete! Press Space to finish"; // Copilot helped fix this
        }
    }
    
    function endLanguage(event) {
        if (event.key == ' ') {
            document.body.removeChild(explainBox)
            removeEventListeners()
        }
    }
    
    function language1() {
        document.createElement('replyBox');
        explainBox.textContent = "Shalom Aleichem, my name is Esther. I grew up in Eastern Europe and came to America, the land of opportunity, only recently.";
        replyBox.textContent = "Aleichem shalom!";
        document.createElement('optionOne');
        document.createElement('optionTwo');
        document.createElement('optionThree');
        optionOne.textContent = "What was your journey like?";
        optionTwo.textContent = "I'd like to hear your life right now.";
        optionThree.textContent = "Tell me about your language.";
        document.addEventListener('click', continueLanguage1);
        if (optionOne.checked) {
            languageJourney();
            journey = true;
        } else if (optionTwo.checked) {
            languageLife();
            life = true;
        } else if (optionThree.checked) {
            languageLanguage();
            language = true;
            
        } else if (journey = true && life == true && language == true) {
            document.createElement('languageEnd');
            if (languageEnd, 'click') {
                languageEnd();
            }
        }
    }
    function languageJourney() {
        explainBox.textContent = "It took my family a long time to save up money and buy tickets for our voyage. Between passports and visas and all of the permissions, it’s difficult for Jews in Europe to travel right now. We came into America through Ellis Island, which is a port of New York City. It was a long journey, but we were so excited to finally be here.";        
        document.addEventListener('keydown', continueLanguage1); 
    }
    function languageLife() {
        document.addEventListener('keydown', continueLanguage1);
        explainBox.textContent = "My life is much better now. I have a job and a place to live, and I am able to send money back to my family in Europe. We live near Hester Street, which is a center of Jewish life in New York City.";

    }

    function languageLanguage() {
        document.addEventListener('keydown', continueLanguage1);
        explainBox.textContent = "Sure thing! Yiddish is a combination of Hebrew and German. Some of our common phrases are “Nosh,” which means to snack, “Schlep,” which means to carry something heavy, and “kvetch,” which means to complain. Next time your parents say you’re complaining, say you’re actually kvetching.";
    }    
    function languageEnd() {
        explainBox.textContent = "Language complete! Press Space to finish";
        document.addEventListener('keydown', endLanguage);
    }
    function removeEventListeners() {
        document.removeEventListener('keydown', continueLanguage0);
        document.removeEventListener('keydown', continueLanguage1);
        document.removeEventListener('keydown', continueLanguage2);
      }