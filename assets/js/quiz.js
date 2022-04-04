//create an array of objects of questions and 4 questions (can be thought of as a tradtional flashcard)
//sample taken as test from tutorialpoint
//fill later with personal notes
const flashcardArray = [ //will create an array of size 3 which the quiz will draw text from
    {
        "questionText": "Which of the following is true about variable naming conventions in JavaScript?",
        "buttonText1": "1. JavaScript variable names must begin with a letter or the underscore character.",
        "buttonText2": "2. JavaScript variable names are case sensitive.",
        "buttonText3": "3. Both of the above.",
        "buttonText4": "4. None of the above.",
    },
    {
        "questionText": "Which of the following is a valid type of function JavaScript supports?",
        "buttonText1": "1. Named function",
        "buttonText2": "2. Anonymous function",
        "buttonText3": "3. Both of the above.",
        "buttonText4": "4. None of the above.",
    },
    {
        "questionText": "Which of the following type of variable is visible only within a function where it is defined?",
        "buttonText1": "1. Global variable",
        "buttonText2": "2. Local variable",
        "buttonText3": "3. Both of the above.",
        "buttonText4": "4. None of the above.",
    }    
];

//create an array of numbers that are answers to each question (question number corresponds to array position)(potentially read and compare [1]. blah?; parse first letter)
//ie answerArray[1] = "3"; means the answer to question 2 is button 3
//will probably be used in event listener
const answerArray = ["3", "3", "2"]



//begin functions
function createBtn(displayText) {
    let genericButtonE1 = document.createElement("button");
    genericButtonE1.textContent = displayText;
    //genericButtonE1.setAttribute()
    //append in another function
    return genericButtonE1;
}

function createStartPage() {
    //edits the area for the text
    //note that getElementsByClassName returns an array of all elements withe corresponding class, hence the need for [0]
    //also no need for period in the parameter
    let textAreaSelection = document.getElementsByClassName("question-text-area"); //"Try to answer the following code-related questiosn within the time limit. Keep in mind the incorrect answers will penalize your score/time by ten seconds!";
    textAreaSelection[0].innerHTML = "Try to answer the following code-related questiosn within the time limit. Keep in mind the incorrect answers will penalize your score/time by ten seconds!";
    
    //creates a start button wrapped in a div with class temp container that will be deleted later
    let buttonAreaSelectE1 = document.querySelector(".button-area");
    let tempContainerDivE1 = document.createElement("div");
    tempContainerDivE1.className = "temp-container";

    let genericButton = createBtn("Start Quiz");
    genericButton.setAttribute("id", "start-quiz");
    tempContainerDivE1.appendChild(genericButton);
    buttonAreaSelectE1.appendChild(tempContainerDivE1);
}

function clearPageMain() {
    //removes everything in the main by replacing questionTextArea, buttonArea with null
    let textAreaSelection = document.getElementsByClassName("question-text-area"); //"Try to answer the following code-related questiosn within the time limit. Keep in mind the incorrect answers will penalize your score/time by ten seconds!";
    textAreaSelection[0].innerHTML = "";

    let buttonAreaSelectE1 = document.querySelector(".temp-container");
    buttonAreaSelectE1.remove();
}

function createGenericQuestionPage(questionNum) {
    let currentQuestion = flashcardArray[questionNum];
    let textAreaSelection = document.getElementsByClassName("question-text-area"); //"Try to answer the following code-related questiosn within the time limit. Keep in mind the incorrect answers will penalize your score/time by ten seconds!";
    textAreaSelection[0].innerHTML = currentQuestion["questionText"];
    
    //Same as before as the start page - creates a start button wrapped in a div with class temp container that will be deleted later
    let buttonAreaSelectE1 = document.querySelector(".button-area");
    let tempContainerDivE1 = document.createElement("div");
    tempContainerDivE1.className = "temp-container";

    //use the flashcard array to retrieve button text and create buttons then append them to the div
    let genericButton = createBtn(currentQuestion["buttonText1"]);
    genericButton.setAttribute("id", "btn-1")
    tempContainerDivE1.appendChild(genericButton);
    genericButton = createBtn(currentQuestion["buttonText2"]);
    genericButton.setAttribute("id", "btn-2")
    tempContainerDivE1.appendChild(genericButton);
    genericButton = createBtn(currentQuestion["buttonText3"]);
    genericButton.setAttribute("id", "btn-3")
    tempContainerDivE1.appendChild(genericButton);
    genericButton = createBtn(currentQuestion["buttonText4"]);
    genericButton.setAttribute("id", "btn-4")
    tempContainerDivE1.appendChild(genericButton);

    //now append properly to the button area
    buttonAreaSelectE1.appendChild(tempContainerDivE1);  
}

//handles buttons, need to include start quiz button
function buttonListener(event) {
    let targetE1 = event.target;
    if(targetE1.matches("#btn-1")) {
        console.log("hit 1");
        clickedAnswer(answerArray[questionCount] === "1");
    }
    if(targetE1.matches("#btn-2")) {
        console.log("hit 2");
        clickedAnswer(answerArray[questionCount] === "2");
    }
    if(targetE1.matches("#btn-3")) {
        console.log("hit 3");
        clickedAnswer(answerArray[questionCount] === "3");
    }
    if(targetE1.matches("#btn-4")) {
        console.log("hit 4");
        clickedAnswer(answerArray[questionCount] === "4");
    }
    if(targetE1.matches("#start-quiz")){
        console.log("start the quiz");
        clickedAnswer(true);
    }
}

//allows progression to the next question as well
function clickedAnswer(buttonResult) {
    if(buttonResult) {
        score++;//replace with timer later
        //also edits footer
        
    }

    questionCount++;
    clearPageMain();
    if(questionCount < 3) {
        createGenericQuestionPage(questionCount);
    }
    else {
        //go to endpage
    }
    console.log("score is now " + score);

}
//run all needed functions

//temp test variable both start at -1 for iterative purposes
var score = -1;
var questionCount = -1;
var buttonArea = document.querySelector(".button-area")
buttonArea.addEventListener("click", buttonListener);

createStartPage();
//clearPageMain();
/* testing createGenericQuestionPage and wiping afterwards
for(let x = 0; x<3;x++) {
    createGenericQuestionPage(x);
    clearPageMain();
}*/
//createGenericQuestionPage(0);