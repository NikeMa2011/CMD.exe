function giveSpace() {
    showLocationRow.innerHTML = null;

    for (let i = 0; i < inputLocation + preString.length; i ++) {
        showLocationRow.innerHTML += ' ';
    }
}
function slashFunction() {
    giveSpace();

    if (slashBool) {
        showLocationRow.innerHTML += '¯';
        slashBool = false;
    } else {
        slashBool = true;
    }
}
function slashStop() {
    giveSpace();
    clearInterval(slash);

    slashBool = true;
    slashFunction();
}
function slashReslash() {
    slashStop();

    slash = setInterval(() => {
        slashFunction();
    }, 500);
}
function slashHide() {
    showLocationRow.hidden = true;
}
function slashApper() {
    showLocationRow.hidden = false;
}
function displayInput() {
    refresh();
    slashReslash();
}
function inputRowAddKey() {
    inputLocation ++;

    frontString = inputString.slice(0, inputLocation);
    backString = inputString.slice(inputLocation);

    inputString = frontString + inputKey + backString;
}
function inputRowBackSpace() {
    if (inputLocation > 0) {
        frontString = inputString.slice(0, inputLocation - 1);
        backString = inputString.slice(inputLocation, inputRowStringLength);

        inputString = frontString + backString;

        inputLocation --; 
    }
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

    slashApper();
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