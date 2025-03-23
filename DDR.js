let keyNumber;
let droppingKey;
let points = 0;
let danceMoves = [];
let currentMoveNum = 0;

const display = document.createElement('output');
document.body.appendChild(display);

const pointDisplay = document.createElement('output');
document.body.appendChild(pointDisplay);

async function loadDanceMoves() {
    const response = await fetch('danceMoves.txt'); // Load text file with dance moves
    const text = await response.text();
    danceMoves = text.split(/\r?\n/).filter(line => line.trim() !== ""); // Split by line and remove empty ones
    currentMoveNum = 0;
    keySelect()
}

function endgame() {
    document.removeEventListener('keydown', checkKey);
    display.textContent = "Game Over! Press Space to continue";
    clearInterval(interval)
    document.addEventListener('keydown', function(event) {
    if (event.key == ' ') {
        congrats()
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

loadDanceMoves()
const interval = setInterval(keySelect, 4000);


document.addEventListener('keydown', checkKey)

function checkKey(event) {
const key = event.key;
if (key == droppingKey) {
points += 1;
}
else {
points -= 1;
}
keySelect()
pointDisplay.textContent = points
}

function clearScreen() {
// Clears all elements on the screen
document.body.removeChild(display)
document.body.removeChild(pointDisplay)
}

function congrats() {
// Enters into the congrats mode, where the user can continue from
clearScreen()
explainBox = document.createElement('output');
document.body.appendChild(explainBox);
explainBox.textContent = "Great Job. Now it's time to learn the moves you just used! \n Press Space to Continue"
document.addEventListener('keydown', continue0) 
}    
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
explainBox.textContent = "... Press Space to Continue"
document.addEventListener('keydown', continue4);
}

function learningEnd() {
explainBox.textContent = "Thanks for Learning with me!"
}