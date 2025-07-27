function searchKeyWords(input) {
    let keyWords = {};
    let keyWordNum = 0;

    inputStringSets[(selectInputStringSetNum) + 1] = input;
    selectInputStringSetNum ++;

    for (let i = 0; i < input.length; i ++) {
        // 一个一个字符来查找空格来判断关键字和输入
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
    
    if (IPPartsNum == 3) {
        for (let i = 0; i <= IPPartsNum; i ++) {

            if (IPParts[i] <= 255 && IPParts[i] >= 0) {
                // 所以说为什么我用 !IPParts[i] <= 255 && IPParts[i] >= 0 不行???
            } else return false;
        }
        return true;
    }
    return false;
}