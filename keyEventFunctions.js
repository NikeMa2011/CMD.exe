window.addEventListener("keydown", function (event) {
    inputKey = event.key;
    outputLength = inputString.length;

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
                if (inputLocation < outputLength) {
                    inputLocation ++;
                } else {
                    if (debugIsON) {
                        Cout("input location is already on maxium size (" + inputLocation + ")");
                    }
                }
            } else if (inputKey == "Backspace") {
                if (inputLocation > 0) {
                    inputLocation --;

                    if (debugIsON) {
                        Cout(inputLocation);
                    }
                    
                    inputString = inputString.slice(0, -1);
                } else if (debugIsON) {
                    Cout("input location is already on minium size (0)");
                }
            } else if (inputKey == "Enter") {
                searchKeyWords(inputString);
                return;
            } else if (debugIsON) {
                Cout("speical input: " + inputKey);
            }
        } else {
            inputLineAddKey();
        }
        displayInput();
    }
});

// 待优化...