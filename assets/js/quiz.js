function createBtn(displayText) {
    var genericButtonE1 = document.createElement("button");
    genericButtonE1.textContent = displayText;
    //genericButtonE1.setAttribute()
    //append in another function
    return genericButtonE1;
}

function createStartScreen() {
    //edits the area for the text
    //note that getElementsByClassName returns an array of all elements withe corresponding class, hence the need for [0]
    //also no need for period in the parameter
    let textAreaSelection = document.getElementsByClassName("question-text-area"); //"Try to answer the following code-related questiosn within the time limit. Keep in mind the incorrect answers will penalize your score/time by ten seconds!";
    textAreaSelection[0].innerHTML = "Try to answer the following code-related questiosn within the time limit. Keep in mind the incorrect answers will penalize your score/time by ten seconds!";
    
    //creates a start button wrapped in a div with class temp container that will be deleted later
    let buttonAreaSelectE1 = document.querySelector(".button-area");
    let tempContainerDivE1 = document.createElement("div");
    tempContainerDivE1.className = "temp-container";

    var genericButton = createBtn("Start Quiz");
    tempContainerDivE1.appendChild(genericButton);
    buttonAreaSelectE1.appendChild(tempContainerDivE1);
}

function clearPageMain() {
    //removes everything in the main by replacing questionTextArea, buttonArea with null
    let textAreaSelection = document.getElementsByClassName("question-text-area"); //"Try to answer the following code-related questiosn within the time limit. Keep in mind the incorrect answers will penalize your score/time by ten seconds!";
    textAreaSelection[0].innerHTML = "";

    let buttonAreaSelectE1 = document.querySelector(".temp-container");
    buttonAreaSelectE1.remove();
    

    //buttonAreaSelectE1 = "";

}

function createGenericSCreen() {

}

//run all needed functions
createStartScreen();
//clearPageMain();