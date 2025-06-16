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
function IsIPAddress(input) {
    let IPParts = [];
    let IPPartsNum = 0;
    for (let i = 0; i < 4; i++) {
        if(input[i] == '.') {
            IPParts++;
            continue;
        } else {
            if (!IPPartsNum[IPParts]) {
                IPPartsNum[IPParts] = '';
            }
            IPPartsNum[IPParts] += input[i];
        }
    }
    if (IPParts == 4) {
        for (let i = 0; i < 4; i ++) {
            if (!IPPartsNum[IPParts] <= 255 && IPPartsNum[IPParts] >= 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}