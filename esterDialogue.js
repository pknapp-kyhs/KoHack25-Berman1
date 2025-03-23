function esterDialogue(){
setText (textOutput, "Shalom Aleichem, my name is Esther. I grew up in Eastern Europe and came to America, the land of opportunity, only recently.");
setText (optionA, "a. What was your journey like?");
setText (optionB, "b. Where do you live now?");
var question = 1
while (question > 0) {
    if (optionA == true){
        setText (textOutput, "My journey was long and difficult, but I am grateful to be here now.");
        question = 0
        }
    }
    else if (optionB == true){
        setText (textOutput, "I live in New York City, where I work as a seamstress.");
        question = 0
    }
}