function changeInputToInputedString() {
    selectInputRow.innerHTML = newInputString;
    inputLocation = newInputString.length;
    Cout(newInputString)
    selectInputRow.innerHTML = newInputString;
}

window.addEventListener("keydown", function (event) {
    inputKey = event.key;
    inputRowStringLength = inputString.length;

    newInputString = inputStringSets[selectInputStringSetNum];
    inputStringSetsLength = (inputStringSets.length) - 1;
    // inputStringSetsLength = inputStringSets.length;
    // inputRowStringLength --;

    if (inputKey == "ArrowLeft") {
        if (inputLocation > 0) {
            inputLocation--;
        }
    } else if (inputKey == "ArrowRight") {
        if (inputLocation < inputRowStringLength) {
            inputLocation ++;
        }
    } else if (inputKey == "ArrowUp") {
        if (selectInputStringSetNum > 1) {

            changeInputToInputedString();
            selectInputStringSetNum --;
        }
    } else if (inputKey == "ArrowDown") {
        if (selectInputStringSetNum < inputStringSetsLength) {

            changeInputToInputedString();
            selectInputStringSetNum++;
        }
    } else if (inputKey == "Backspace") {
        inputRowBackSpace();
    } else if (inputKey == "Enter") {
        slashStop();
        slashHide();

        searchKeyWords(inputString);

        return;
    } else if (inputKey.length == 1) {
        inputRowAddKey();
    }
    displayInput();
});

// 待优化...