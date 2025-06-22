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
function inputRowAddKey() {
    inputLocation ++;

    frontString = inputString.slice(0, inputLocation);
    backString = inputString.slice(inputLocation);
    if (debugIsON) {
        Cout("inputLocation: " + inputLocation);
    }
    inputString = frontString + inputKey + backString;
}


function addNullPadagraph() {
    selectInputRowNum ++;

    newElement = "<p id=\"paragraph_" + selectInputRowNum + "\">\n</p>";
    input.innerHTML += newElement;
}
function addParagraph(string) {
    selectInputRowNum ++;
    if(string == undefined) {
        string = '';
    }
    newElement = "<p id=\"paragraph_" + selectInputRowNum + "\">" + string + "</p>";
    input.innerHTML += newElement;
}
function addInputRow() {
    inputLocation = 0;
    slashReslash();

    selectInputRowNum ++;
    newElement = "<p id=\"pre_" + selectInputRowNum + "\">" + preString + "<span id=\"input_" + selectInputRowNum + "\"></span>";
    input.innerHTML += newElement;
    getInputRow();
}
function getInputRow() {
    selectInputRow = document.getElementById("input_" + selectInputRowNum);
    inputString = selectInputRow.innerHTML;
}
function refresh(){
    selectInputRow.innerHTML = inputString;
}