function searchKeyWords(input) {
    let keyWords = {};
    let keyWordNum = 0;
    for (let i = 0; i < input.length; i ++) {
        // char by char ↑
        if (input[i] == ' ') {
            keyWordNum++;
            continue;
        } else {
            if (!keyWords[keyWordNum]) {
                keyWords[keyWordNum] = '';
            }
            keyWords[keyWordNum] += input[i];
        }
    }
    run(keyWords);
}
function isIPAddress(input) {
    let IPParts = [];
    let IPPartsNum = 0;

    for (let i = 0; i < input.length; i++) {
        if(input[i] == '.') {
            IPPartsNum++;
            continue;
        } else {
            if (!IPParts[IPPartsNum]) {
                IPParts[IPPartsNum] = '';
            }
            IPParts[IPPartsNum] += input[i];
        }
    }
    Cout(IPPartsNum);
    if (IPPartsNum == 4) {
        for (let i = 0; i < 4; i ++) {
            Cout(IPParts[i]);

            if (!IPParts[i] <= 255 && IPParts[i] >= 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}