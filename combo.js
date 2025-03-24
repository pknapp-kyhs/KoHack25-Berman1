const samButton = document.createElement('button');
samButton.textContent = "Sam";
document.body.appendChild(samButton);
samButton.addEventListener('click', () => {
    sam()
})

const kabedeButton = document.createElement('button');
kabedeButton.textContent = "Kabede";
document.body.appendChild(kabedeButton);
kabedeButton.addEventListener('click', () => {
    kabede()
})

const kabedeButton = document.createElement('button');
kabedeButton.textContent = "Back";
kabedeButton.addEventListener('click', () => {
    back()
})

function back() {
    clearScreen()
    document.body.removeChild(backButton);
    document.body.removeChild(danceButton);
    document.body.appendChild(samButton);
    document.body.appendChild(kabedeButton);
}

function sam() {
    clearScreen()
    document.body.removeChild(samButton);
    document.body.removeChild(kabedeButton);
    document.body.appendChild(backButton);
    document.body.appendChild(danceButton);
}

function kabede() {
    clearScreen()
    document.body.removeChild(samButton);
    document.body.removeChild(kabedeButton);
    document.body.appendChild(backButton);
    document.body.appendChild(recipeButton);
}

const recipeButton = document.createElement('button');
recipeButton.textContent = "Click for Recipes";
recipeButton.addEventListener('click', () => {
    recipe0()
})

const danceButton = document.createElement('button');
danceButton.textContent = "Click for Dances";
danceButton.addEventListener('click', () => {
    startDance()
})

let explainBox = document.createElement('output');
document.body.appendChild(explainBox);

function recipe0() {  
    // Remove any existing event listeners before adding new ones
    removeEventListeners();
    // Reset the explainBox if it was removed
    if (!document.body.contains(explainBox)) {
        explainBox = document.createElement('output');
        document.body.appendChild(explainBox);
    }
    explainBox.textContent = "Recipe: Press Space to Continue"
    document.addEventListener('keydown', continueRecipe0) 
}    

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
    currentMoveNum += 1
    if (keyNumber == 0) {
        droppingKey = "w"
    }
    else if (keyNumber == 1) {
        droppingKey = "a"
    }
    else if (keyNumber == 2) {
        droppingKey = "s"
    }
    else if (keyNumber == 3) {
        droppingKey = "d"
    }
    display.textContent = droppingKey
}
// Function to check if the user presses the right key
function checkKey(event) {
    if (event.key == droppingKey) {
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
}

function congrats() {
// Enters into the congrats mode, where the user can continue from
    clearScreen()
    explainBox = document.createElement('output');
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
explainBox.textContent = ".... Press Space to Continue";
document.addEventListener('keydown', continue1); 
}

function learning2() {
explainBox.textContent = "... Press Space to Continue";
document.addEventListener('keydown', continue2); 
}

function learning3() {
document.addEventListener('keydown', continue3);
explainBox.textContent = ".... Press Space to Continue"; 
}

function learning4() {
explainBox.textContent = "... Press Space to Continue";
document.addEventListener('keydown', continue4);
}

function learningEnd() {
explainBox.textContent = "Thanks for Learning with me!";
document.addEventListener('keydown', continue5);
}

function learningClear() {
    explainBox.textContent = '';
}

//__________________________________________________________________________________

