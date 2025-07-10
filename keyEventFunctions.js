window.addEventListener("keydown", function (event) {
    inputKey = event.key;
    inputRowStringLength = inputString.length;

    if (involvedKeys.includes(inputKey)) {
        if (debugIsON) {
            Cout("involved input: " + inputKey);
        }
    } else {
        if (specialKeys.includes(inputKey)) {
            if (inputKey == "ArrowLeft") {
                if (inputLocation > 0) {
                    inputLocation --;
                } else if (debugIsON) {
                    Cout("input location is already on minium size (0)");
                }
            } else if (inputKey == "ArrowRight") {
                if (inputLocation < inputRowStringLength) {
                    inputLocation ++;
                } else {
                    if (debugIsON) {
                        Cout("input location is already on maxium size (" + inputLocation + ")");
                    }
                }
            } else if (inputKey == "ArrowUp") {
                if (selectInputStringSetNUm > 0) inputString.innerHTML = inputStringSets[selectInputStringSetNum];
            } else if (inputKey == "ArrowDown") {

            } else if (inputKey == "Backspace") {
                inputRowBackSpace();
            } else if (inputKey == "Enter") {
                slashStop();
                slashHide();

                searchKeyWords(inputString);
                return;
            } else if (debugIsON) {
                Cout("speical input: " + inputKey);
            }
        } else {
            inputRowAddKey();
        }
        displayInput();
    }
});

// 待优化...