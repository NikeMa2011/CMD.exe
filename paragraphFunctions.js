function giveSpace() {
    showLocation.innerHTML = null;
    for (let i = 0; i < inputLocation + preString.length; i ++) {
        showLocation.innerHTML += ' ';
    }
}
function slashFunction() {
    giveSpace();
    if (debugIsON) Cout("slash is: " + slashBool);
    if (slashBool) {
        showLocation.innerHTML += '¯';
        slashBool = false;
    } else {
        slashBool = true;
    }
}
function slashReslash() {
    giveSpace();
    clearInterval(slash);

    slashBool = true;
    slashFunction();

    slash = setInterval(() => {
        slashFunction();
    }, 500);
}
function displayInput() {
    refresh();

    slashReslash();
}
function inputLineAddKey() {
    inputLocation ++;

    frontString = inputString.slice(0, inputLocation);
    backString = inputString.slice(inputLocation);
    if (debugIsON) {
        Cout("inputLocation: " + inputLocation);
    }
    inputString = frontString + inputKey + backString;
}


function addParagraph(string) {
    selectInputLineNum ++;
    if(string == undefined) {
        string = '';
    }
    newElement = "<p id=\"paragraph_" + selectInputLineNum + "\">" + string + "</p>";
    input.innerHTML += newElement;
}
function addInputLine() {
    slashReslash();

    selectInputLineNum ++;
    newElement = "<p id=\"pre_" + selectInputLineNum + "\">" + preString + "<span id=\"input_" + selectInputLineNum + "\"></span>";
    input.innerHTML += newElement;
    getInputLine();
}
function getInputLine() {
    selectInputLine = document.getElementById("input_" + selectInputLineNum);
    inputString = selectInputLine.innerHTML;
}
function refresh(){
    selectInputLine.innerHTML = inputString;
}