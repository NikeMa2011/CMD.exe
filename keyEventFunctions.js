function changeInputToInputedString() {
    newInputString = inputStringSets[selectInputStringSetNum];
    inputStringSetsLength = (inputStringSets.length) - 1;

    inputString = newInputString;
    inputLocation = newInputString.length;

    displayInput();
}

window.addEventListener("keydown", function (event) {
    if (executeTask) {
        return;
    }

    inputKey = event.key;
    inputRowStringLength = inputString.length;

    if (inputKey == "ArrowLeft") {
        if (inputLocation > 0) {
            inputLocation--;
        }
    } else if (inputKey == "ArrowRight") {
        if (inputLocation < inputRowStringLength) {
            inputLocation ++;
        }
    } else if (inputKey == "ArrowUp") {
        if (selectInputStringSetNum > 0) {
            if (selectInputStringSetNum > 1) {
                selectInputStringSetNum --;
            }

            changeInputToInputedString();
        }
    } else if (inputKey == "ArrowDown") {
        if (selectInputStringSetNum < inputStringSetsLength) {
            selectInputStringSetNum ++;

            changeInputToInputedString();
        }
    } else if (inputKey == "Backspace") {
        inputRowBackSpace();
    } else if (inputKey == "Enter") {
        executeTask = true;

        slashStop();
        slashHide();

        searchKeyWords(inputString);

        return;
    } else if (inputKey.length == 1) {
        inputRowAddKey();
    }
    displayInput();
});