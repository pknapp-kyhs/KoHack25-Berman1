// Makes a info text to give instructions to the user
const infoText = document.createElement('p');
document.body.appendChild(infoText);
infoText.textContent = "Select A Character";

// Creates a text box used in the recipe screen and the dance screen
var explainBox = document.createElement('output');
explainBox.classList.add("explainBox");

// Creates a button for entering the Sam screen
const samButton = document.createElement('button');
samButton.textContent = "Sam";
document.body.appendChild(samButton);
samButton.addEventListener('click', () => {
    sam()
})

// Creates a button for entering the Esther screen
const esterButton = document.createElement('button');
esterButton.textContent = "Esther";
document.body.appendChild(esterButton);
esterButton.addEventListener('click', () => {
    ester()
})

// Creates a button for entering the Kabede screen
const kabedeButton = document.createElement('button');
kabedeButton.textContent = "Kabede";
document.body.appendChild(kabedeButton);
kabedeButton.addEventListener('click', () => {
    kabede()
})

// Adds the image to the Sam button
const samImage = document.createElement("img");
samImage.src = "sam.png";
samImage.style.width = "50px"; // Adjust size
samImage.style.height = "50px"; // Adjust size
samButton.prepend(samImage); // Add image before text (this code is ChatGPT)

// Adds the image to the Kabede button
const kabedeImage = document.createElement("img");
kabedeImage.src = "kabede.png";
kabedeImage.style.width = "50px"; // Adjust size
kabedeImage.style.height = "50px"; // Adjust size
kabedeButton.prepend(kabedeImage); // Add image before text (this code is ChatGPT)

// Adds the image to the Esther button
const esterImage = document.createElement("img");
esterImage.src = "Esther.png";
esterImage.style.width = "50px"; // Adjust size
esterImage.style.height = "50px"; // Adjust size
esterButton.prepend(esterImage); // Add image before text (this code is ChatGPT)

// Back button for Kabede screen
const backKabedeButton = document.createElement('button');
backKabedeButton.textContent = "Back";
backKabedeButton.addEventListener('click', () => {
    backKabede()
})

// Back button for Sam screen
const backSamButton = document.createElement('button');
backSamButton.textContent = "Back";
backSamButton.addEventListener('click', () => {
    backSam()
})

// Back button for Esther screen
const backEsterButton = document.createElement('button');
backEsterButton.textContent = "Back";
backEsterButton.addEventListener('click', () => {
    backEster()
})

// Creates a button to enter the quiz
const questionButton = document.createElement('button');
questionButton.textContent = "Take the Quiz!";
questionButton.addEventListener('click', () => {
    questionOne()
})

// Creates the elements for the quiz
var question = document.createElement('output');
var answerA = document.createElement('button');
var answerB = document.createElement('button');
var answerC = document.createElement('button');
var optionOne = document.createElement('button');
var optionTwo = document.createElement('button');
var optionThree = document.createElement('button');
// Variables for the quiz
var score = 0;
var streak = 0;
var shekel = 0;
var travels = false;
var lifestyle = false;
var language = false;


// Function to enter the main screen from the Kabede screen clear all elements not on the main screen
function backKabede() {
    clearScreen()
    if (document.body.contains(backEsterButton)) {
        document.body.removeChild(backEsterButton);
    }
    if (document.body.contains(questionButton)) {
        document.body.removeChild(questionButton);
    }
    if (document.body.contains(optionOne)) {
        document.body.removeChild(optionOne);
    }
    if (document.body.contains(optionTwo)) {
        document.body.removeChild(optionTwo);
    }
    if (document.body.contains(optionThree)) {
        document.body.removeChild(optionThree);
    }
    if (document.body.contains(question)) {
        document.body.removeChild(question);
    }
    if (document.body.contains(answerA)) {
        document.body.removeChild(answerA);
    }
    if (document.body.contains(answerB)) {
        document.body.removeChild(answerB);
    }
    if (document.body.contains(answerC)) {
        document.body.removeChild(answerC); //This segment was helped by chatGPT
    }
    explainBox.textContent = '';
    document.body.removeChild(backKabedeButton);
    document.body.removeChild(recipeButton);
    infoText.textContent = "Select A Character";
    document.body.appendChild(samButton);
    document.body.appendChild(esterButton);
    document.body.appendChild(kabedeButton);
}

// Function to enter the main screen from the Sam screen clear all elements not on the main screen
function backSam() {
    clearScreen()
    if (document.body.contains(backEsterButton)) {
        document.body.removeChild(backEsterButton);
    }
    if (document.body.contains(questionButton)) {
        document.body.removeChild(questionButton);
    }
    if (document.body.contains(optionOne)) {
        document.body.removeChild(optionOne);
    }
    if (document.body.contains(optionTwo)) {
        document.body.removeChild(optionTwo);
    }
    if (document.body.contains(optionThree)) {
        document.body.removeChild(optionThree);
    }
    if (document.body.contains(question)) {
        document.body.removeChild(question);
    }
    if (document.body.contains(answerA)) {
        document.body.removeChild(answerA);
    }
    if (document.body.contains(answerB)) {
        document.body.removeChild(answerB);
    }
    if (document.body.contains(answerC)) {
        document.body.removeChild(answerC); //This segment was helped by chatGPT
    }
    explainBox.textContent = '';
    document.body.removeChild(backSamButton);
    document.body.removeChild(danceButton);
    infoText.textContent = "Select A Character";
    document.body.appendChild(samButton);
    document.body.appendChild(esterButton);
    document.body.appendChild(kabedeButton);
}

// Function to enter the main screen from the Esther screen and clear all elements not on the main screen
function backEster() {
    clearScreen()
    if (document.body.contains(backEsterButton)) {
        document.body.removeChild(backEsterButton);
    }
    if (document.body.contains(questionButton)) {
        document.body.removeChild(questionButton);
    }
    if (document.body.contains(optionOne)) {
        document.body.removeChild(optionOne);
    }
    if (document.body.contains(optionTwo)) {
        document.body.removeChild(optionTwo);
    }
    if (document.body.contains(optionThree)) {
        document.body.removeChild(optionThree);
    }
    if (document.body.contains(question)) {
        document.body.removeChild(question);
    }
    if (document.body.contains(answerA)) {
        document.body.removeChild(answerA);
    }
    if (document.body.contains(answerB)) {
        document.body.removeChild(answerB);
    }
    if (document.body.contains(answerC)) {
        document.body.removeChild(answerC); //This segment was helped by chatGPT
    }
    explainBox.textContent = '';
    infoText.textContent = "Select A Character";
    document.body.appendChild(samButton);
    document.body.appendChild(esterButton);
    document.body.appendChild(kabedeButton);
    questionButton.disabled = false;
    travels = false;
    lifestyle = false;
    language = false;
}

// Function to enter the Sam screen
function sam() {
    clearScreen()
    document.body.removeChild(samButton);
    document.body.removeChild(esterButton);
    document.body.removeChild(kabedeButton);
    infoText.textContent = "Select an Activity";
    document.body.appendChild(backSamButton);
    document.body.appendChild(danceButton);
}

// Function to enter the Kabede screen
function kabede() {
    clearScreen()
    document.body.removeChild(samButton);
    document.body.removeChild(esterButton);
    document.body.removeChild(kabedeButton);
    infoText.textContent = "Select an Activity";
    document.body.appendChild(backKabedeButton);
    document.body.appendChild(recipeButton);
}

// Function to enter the Esther screen
function ester() {
    clearScreen()
    document.body.removeChild(samButton);
    document.body.removeChild(kabedeButton);
    document.body.removeChild(esterButton);
    infoText.textContent = "Select an Activity";
    document.body.appendChild(backEsterButton);
    document.body.appendChild(questionButton);
}

// Creates a button to enter the Recipe mode
const recipeButton = document.createElement('button');
recipeButton.textContent = "Click for Recipes";
recipeButton.addEventListener('click', () => {
    recipe0()
})

// Creates a button to enter the Dance mode
const danceButton = document.createElement('button');
danceButton.textContent = "Click for Dances";
danceButton.addEventListener('click', () => {
    startDance()
})

document.body.appendChild(explainBox);

// Makes a function to start the recipe mode
function recipe0() {  
    // Remove any existing event listeners before adding new ones
    removeEventListeners();
    // Reset the explainBox if it was removed
    if (!document.body.contains(explainBox)) {
        document.body.appendChild(explainBox);
    }
    explainBox.textContent = "Recipe: Press Space to Continue"
    document.addEventListener('keydown', continueRecipe0) 
}    // this segment was edited with the help of Copilot

// The following bunch of functions are used to move the text on when the user presses the space key in recipe mode
function continueRecipe0(event) {
    if (event.key == ' ') {
        recipe1()
    }
}   

function continueRecipe1(event) {
    if (event.key == ' ') {
        recipe2()
    }
}

function continueRecipe2(event) {
    if (event.key == ' ') {
        recipe3()
    }
}

function continueRecipe3(event) {
    if (event.key == ' ') {
        recipe4()
    }
}

function continueRecipe4(event) {
    if (event.key == ' ') {
        recipe5()
    }
}

function continueRecipe5(event) {
    if (event.key == ' ') {
        recipe6()
    }
}

function continueRecipe6(event) {
    if (event.key == ' ') {
        recipe7()
    }
}

function continueRecipe7(event) {
    if (event.key == ' ') {
        recipe8()
    }
}

function continueRecipe8(event) {
    if (event.key == ' ') {
        recipe9()
    }
}

function continueRecipe9(event) {
    if (event.key == ' ') {
        recipe10()
    }
}

function continueRecipe10(event) {
    if (event.key == ' ') {
        recipe11()
    }
}

function continueRecipe11(event) {
    if (event.key == ' ') {
        document.addEventListener('keydown', endRecipe);
        explainBox.textContent = "Recipe complete! Press Space to finish"; // Copilot helped fix this
    }
}

function endRecipe(event) {
    if (event.key == ' ') {
        document.body.removeChild(explainBox)
        removeEventListeners()
    }
}

function recipe1() {
    explainBox.textContent = "Hi, my name is Kabede Alemayehu. I am an Ethiopian Jew and today I am going to teach you how to make a traditional Jewish Ethiopian bread, Dabo. ";
    document.addEventListener('keydown', continueRecipe1); 
}

function recipe2() {
    explainBox.textContent = "Ask an adult for permission to cook in the kitchen. Remember to always practice kitchen safety! Ready to get started?";
    document.addEventListener('keydown', continueRecipe2); 
}

function recipe3() {
    document.addEventListener('keydown', continueRecipe3);
    explainBox.textContent = "Great! Here’s what you will need. Start with 1 large aluminum pot. Now, find the ingredients below: 1 kg flour, 1 Tbsp yeast, 1 tsp salt, 2 Tbsp sugar, 2 tsp nigella seeds, ½ tsp ground coriander, ½ tsp ground fenugreek, 2 Tbsp oil, 3 cups water approximately"; 
}

function recipe4() {
    explainBox.textContent = "Begin adding the water. Start with about 1½ cups and begin to mix thoroughly, using your hands. As the ingredients mix and the dough gets wetter, add more water a little bit at a time. You may use the water to help get the dough unstuck from your hands. You are aiming for a consistency of dough that is wet and sticky, but not overly goopy. As you near the proper consistency, add small amounts of extra flour or water as needed. Work the dough inside the bowl for a few minutes."
    document.addEventListener('keydown', continueRecipe4);
}

function recipe5() {
    explainBox.textContent = "Now cover the bowl and leave the dough to rest and rise. It should take around 45 minutes until the dough approximately doubles in size. While you wait, go dance with my friend Sam!"
    document.addEventListener('keydown', continueRecipe5);
}

function recipe6() {
    explainBox.textContent = "Welcome back! Uncover the bowl and deflate the dough, pushing it down and remixing it by hand. Then recover the bowl and let it rise a second time, again until it approximately doubles in size."
    document.addEventListener('keydown', continueRecipe6);
}

function recipe7() {
    explainBox.textContent = "Preheat the oven to 200° C / 390° F. Put baking paper around the inside walls of a round aluminum pot. You may secure the paper with clothespins. Prepare a circle of baking paper that is the size of the inside of the pot. We’re almost there! I can taste it!"
    document.addEventListener('keydown', continueRecipe7);
}

function recipe8() {
    explainBox.textContent = "Gather the dough into a ball and place inside the pot. Remove the clothespins. Wet your hands slightly, and push down the top of the dough. Place the circle of baking paper gently on top, and loosely cover the pot with the lid."
    document.addEventListener('keydown', continueRecipe8);
}

function recipe9() {
    explainBox.textContent = "Put the pot in the oven, on top of aluminum foil or baking tray to prevent any potential messes. After 5 minutes, raise the temperature to 218° C / 425° F. The bread should rise above the top of the pot, pushing up the loose lid. After approximately 35-40 minutes it should have risen sufficiently, and will look nearly done. Remove the lid and circle of baking paper from the pot and bake for an additional 5 minutes."
    document.addEventListener('keydown', continueRecipe9);
}

function recipe10() {
    explainBox.textContent = "After removing the bread from the oven, let it cool for a few minutes and then carefully remove it from the pot. ";
    document.addEventListener('keydown', continueRecipe10);
}

function recipe11() {
    explainBox.textContent = "Congratulations! 🎉 You just made Dabo! We often use Dabo as challah for Shabbat dinner. Now you can too!"
    document.addEventListener('keydown', continueRecipe11);
}

// Function to remove all event listeners
function removeEventListeners() {
    document.removeEventListener('keydown', continueRecipe0);
    document.removeEventListener('keydown', continueRecipe1);
    document.removeEventListener('keydown', continueRecipe2);
    document.removeEventListener('keydown', continueRecipe3);
    document.removeEventListener('keydown', continueRecipe4);
    document.removeEventListener('keydown', continueRecipe5);
    document.removeEventListener('keydown', continueRecipe6);
    document.removeEventListener('keydown', continueRecipe7);
    document.removeEventListener('keydown', continueRecipe8);
    document.removeEventListener('keydown', continueRecipe9);
    document.removeEventListener('keydown', continueRecipe10);
    document.removeEventListener('keydown', continueRecipe11);
    document.removeEventListener('keydown', endRecipe);
    document.removeEventListener('keydown', checkKey);
    document.removeEventListener('keydown', continue0);
    document.removeEventListener('keydown', continue1);
    document.removeEventListener('keydown', continue2);
    document.removeEventListener('keydown', continue3);
    document.removeEventListener('keydown', continue4);
    document.removeEventListener('keydown', continue5);
}

//______________________________________________________________________________________________________

// Intitalizes the variables needed for the dance game
let keyNumber;
let droppingKey;
let points = 0;
let danceMoves = [];
let currentMoveNum = 0;
let interval;

function startDance() {
    // First reset everything to ensure we can restart the dance
    resetDance();
    // Create display and pointDisplay if they don't exist or reattach them if needed
    if (!document.body.contains(display)) {
        document.body.appendChild(display);
    }
    if (!document.body.contains(pointDisplay)) {
        document.body.appendChild(pointDisplay);
    }
    if (!document.body.contains(DanceImg)) {
        document.body.appendChild(DanceImg);
    }

    display.textContent = 'Loading dance moves...';
    pointDisplay.textContent = points;

    // Loads moves and starts game
    loadDanceMoves().then(() => {
        keySelect();
        interval = setInterval(keySelect, 4000);
        document.addEventListener('keydown', checkKey);
    });
}
// Creates the display and pointDisplay elements
const display = document.createElement('output');
document.body.appendChild(display);
const pointDisplay = document.createElement('output');
document.body.appendChild(pointDisplay);
pointDisplay.classList.add("pointDisplay");

// Creates an image space used in the dance screen
const DanceImg = document.createElement("img");
DanceImg.classList.add("dance-img");
DanceImg.style.width = "75px";
DanceImg.style.height = "75px";


// Loads the dance moves from the text file
async function loadDanceMoves() {
    const response = await fetch('danceMoves.txt'); // Load text file with dance moves
    const text = await response.text();
    danceMoves = text.split(/\r?\n/).filter(line => line.trim() !== ""); // Split by line and remove empty lines
    currentMoveNum = 0;
    keySelect() // Start the game
}

// Function to end the game
function endgame() {
    document.removeEventListener('keydown', checkKey);
    display.textContent = "Game Over! Press Space to continue";
    clearInterval(interval)
    document.addEventListener('keydown', function(event) {
    if (event.key == ' ') {
        congrats();
    }
})
}

function keySelect() { 
// Function to read through the text document with the dance move order and display the key to the screen
    if (currentMoveNum >= danceMoves.length) {
        endgame();
        return;
    }
    keyNumber = parseInt(danceMoves[currentMoveNum]);
    currentMoveNum += 1;
    if (keyNumber == 0) {
        droppingKey = "w";
        const upDanceImg = document.createElement("img");
        DanceImg.src = "samd1.png"; 
    }
    else if (keyNumber == 1) {
        droppingKey = "a";
        DanceImg.src = '';
    }
    else if (keyNumber == 2) {
        droppingKey = "s"
        DanceImg.src = "samd2.png"; 
    }
    else if (keyNumber == 3) {
        droppingKey = "d";
        DanceImg.src = '';
    }
    display.textContent = droppingKey
}
// Function to check if the user presses the right key
function checkKey(event) { 
    if (event.key === droppingKey) {
        points += 1;
    }
    else {
        points -= 1;
    }
    pointDisplay.textContent = points
    keySelect()
}    
// Reset function to properly clean up before starting a new dance
function resetDance() {
    // Clear any existing intervals
    clearInterval(interval);
    
    // Remove event listeners
    document.removeEventListener('keydown', checkKey);
    document.removeEventListener('keydown', continue0);
    document.removeEventListener('keydown', continue1);
    document.removeEventListener('keydown', continue2);
    document.removeEventListener('keydown', continue3);
    document.removeEventListener('keydown', continue4);
    document.removeEventListener('keydown', continue5);
    
    // Reset variables
    points = 0;
    currentMoveNum = 0;
    danceMoves = [];
    
    // Reset displays
    if (display) {
        display.textContent = '';
        display.style.display = 'block';
    }
    if (pointDisplay) {
        pointDisplay.textContent = points;
        pointDisplay.style.display = 'block';
    }
    
    // Also remove the explainBox if it exists to start fresh
    if (document.body.contains(explainBox)) {
        explainBox.textContent = '';
    }
    else {
        points -= 1;
}
    pointDisplay.textContent = points
}

function clearScreen() {
// Clears all elements on the screen
if (document.body.contains(display)) {
    document.body.removeChild(display);
}
if (document.body.contains(pointDisplay)) {
    document.body.removeChild(pointDisplay);
}
if (document.body.contains(DanceImg)) {
    document.body.removeChild(DanceImg);
}
}

function congrats() {
// Enters into the congrats mode, where the user can continue from
    clearScreen()
    document.body.appendChild(explainBox);
    explainBox.textContent = "Great Job. Now it's time to learn the moves you just used! Press Space to Continue"
    document.addEventListener('keydown', continue0) 
}  

// the following functions moves the text on when the user presses the space key.
function continue0(event) {
if (event.key == ' ') {
learning1()
}
}   

function continue1(event) {
if (event.key == ' ') {
learning2()
}
}

function continue2(event) {
if (event.key == ' ') {
learning3()
}
}

function continue3(event) {
if (event.key == ' ') {
learning4()
}
}

function continue4(event) {
if (event.key == ' ') {
learningEnd()
}
}

function continue5(event) {
    if (event.key == ' ') {
        learningClear()
    }
}

function learning1() {
explainBox.textContent = "Alright, for the first step in the Hora hold your hands out to your sides and take four steps to your right.";
document.addEventListener('keydown', continue1); 
}

function learning2() {
explainBox.textContent = "Next twist your feet four times, with the front of your feet (your toes!) planted on the ground.";
document.addEventListener('keydown', continue2); 
}

function learning3() {
document.addEventListener('keydown', continue3);
explainBox.textContent = "Lastly, with your hands up in the air, put one foot in the circle and then take it out again three times."; 
}

function learning4() {
explainBox.textContent = "Alright, altogether now!";
document.addEventListener('keydown', continue4);
}

// Ends the learning mode
function learningEnd() {
explainBox.textContent = "Thanks for Learning with me!";
document.addEventListener('keydown', continue5);
}

// Clears the textbox
function learningClear() {
    explainBox.textContent = '';
}

//______________________________________________________

// Disables the answer buttons
function disableAnswers() {
    answerA.disabled = true
    answerB.disabled = true
    answerC.disabled = true
}

// Starts the quiz and asks the first question
function questionOne() {
    document.body.appendChild(question);
    document.body.appendChild(answerA);
    document.body.appendChild(answerB);
    document.body.appendChild(answerC);
    answerA.disabled = false;
    answerB.disabled = false;
    answerC.disabled = false;
    question.textContent = "Where did Esther enter America?"
    answerA.textContent = "Ellis Island"
    answerB.textContent = "Angel Island"
    answerC.textContent = "Southern Border"
    answerA.addEventListener('click', function() {
        score += 1
        streak += 1
        question.textContent = "Correct!"
        disableAnswers()
        setTimeout(function() { questionTwo(); }, 1000);
    })
    answerB.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Esther entered through Ellis Island."
        disableAnswers()
        setTimeout(function() { questionTwo(); }, 1000);
    })
    answerC.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Esther entered through Ellis Island."
        disableAnswers()
        setTimeout(function() { questionTwo(); }, 1000);
    })
    questionButton.disabled = true;
}

// Asks the second question
function questionTwo() {
    question.textContent = "What is a central street to Jewish life??"
    answerA.textContent = "Mulberry Street"
    answerB.textContent = "Wall Street"
    answerC.textContent = "Hester Street"
    answerA.disabled = false
    answerB.disabled = false
    answerC.disabled = false
    answerC.addEventListener('click', function() {
        score += 1
        streak += 1
        question.textContent = "Correct!"
        disableAnswers()
        setTimeout(function() { questionThree(); }, 1000);
    })
    answerB.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Hester Street is a center of Jewish life."
        disableAnswers()
        setTimeout(function() { questionThree(); }, 1000);
    })
    answerA.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Hester Street is a center of Jewish life."
        disableAnswers()
        setTimeout(function() { questionThree(); }, 1000);
    })
}

// Asks the third question and ends the quiz
function questionThree() {
    question.textContent = "What is the Yiddish word for complain?"
    answerA.textContent = "Fietz"
    answerB.textContent = "Kvetch"
    answerC.textContent = "Blurb"
    answerA.disabled = false
    answerB.disabled = false
    answerC.disabled = false
    answerB.addEventListener('click', function() {
        score += 1
        streak += 1
        question.textContent = "Correct!"
        disableAnswers()
        setTimeout(function() { questionsEnd(); }, 1000);
    })
    answerC.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Kvetch is the Yiddish word for complain."
        disableAnswers()
        setTimeout(function() { questionsEnd(); }, 1000);
    })
    answerA.addEventListener('click', function() {
        streak = 0
        question.textContent = "Incorrect! Kvetch is the Yiddish word for complain."
        disableAnswers()
        setTimeout(function() { questionsEnd(); }, 1000);
    })
}

// Ends the quiz and displays the score
function questionsEnd() {
    shekel += score * 10
    question.textContent = "You have finished the quiz! Your score is " + score + " out of 3. You earned " + shekel + " shekels.";
    disableAnswers()
    setTimeout(function() { convo(); }, 1000);
}

// Function to start the conversation with Esther
function convo() {
    if (document.body.contains(question)) {
        document.body.removeChild(question);
    answerA.invisible = true;
    answerB.invisible = true;
    answerC.invisible = true;
    if (document.body.contains(answerA)) {
        document.body.removeChild(answerA);
    }
    if (document.body.contains(answerB)) {
        document.body.removeChild(answerB);
    }
    if (document.body.contains(answerC)) {
        document.body.removeChild(answerC);
    }
    if (!document.body.contains(explainBox)) {
        explainBox = document.createElement('output');
        document.body.appendChild(explainBox);
    }
    explainBox.textContent = "Press Space to Continue"
    document.addEventListener('keydown', continueConvo)
}
}

// Function to move the conversation along
function continueConvo(event) {
    if (event.key == ' ') {
        convo1()
    }
}

// Main part of conversation with Esther
function convo1() {
    document.body.appendChild(explainBox);
    document.body.appendChild(optionOne);
    document.body.appendChild(optionTwo);
    document.body.appendChild(optionThree);
    explainBox.textContent = "Shalom Aleichem, my name is Esther. I grew up in Eastern Europe and came to America, the land of opportunity, only recently."
    optionOne.textContent = "Aleichem shalom! What was your Journey like?"
    optionTwo.textContent = "Aleichem shalom! I'd like to hear about your life now."
    optionThree.textContent = "Aleichem shalom! Tell me about your language." 
    optionOne.addEventListener('click', function() { journey(); });
    optionTwo.addEventListener('click', function() {life(); });
    optionThree.addEventListener('click', function() {lang(); });
    if (travels === true && lifestyle === true && language === true) {
        explainBox.textContent = "Thank you for listening to my story. I hope you learned something new!";
        optionOne.textContent = "Back";
        optionOne.addEventListener('click', function() { backEster(); });
        optionTwo.textContent = "";
        optionThree.textContent = "";
    }
}

// Esther's response 1
function journey() {
    optionOne.textContent = "Back";
    optionOne.addEventListener('click', function() { convo1(); });
    optionTwo.textContent = "";
    optionThree.textContent = ""; 
    explainBox.textContent = "It took my family a long time to save up money and buy tickets for our voyage. Between passports and visas and all of the permissions, it’s difficult for Jews in Europe to travel right now. We came into America through Ellis Island, which is a port of New York City. It was a long journey, but we were so excited to finally be here.";
    travels = true;
}

// Esther's response 2
function life() {
    optionOne.textContent = "Back";
    optionOne.addEventListener('click', function() { convo1(); });
    optionTwo.textContent = "";
    optionThree.textContent = ""; 
    explainBox.textContent = "My life is much better now. I have a job and a place to live, and I am able to send money back to my family in Europe. We live near Hester Street, which is a center of Jewish life in New York City.";
    lifestyle = true;
}

// Esther's response 3
function lang() {
    optionOne.textContent = "Back";
    optionOne.addEventListener('click', function() { convo1(); });
    optionTwo.textContent = "";
    optionThree.textContent = ""; 
    explainBox.textContent = "Sure thing! Yiddish is a combination of Hebrew and German. Some of our common phrases are “Nosh,” which means to snack, “Schlep,” which means to carry something heavy, and “kvetch,” which means to complain. Next time your parents say you’re complaining, say you’re actually kvetching.";
    language = true;
}
