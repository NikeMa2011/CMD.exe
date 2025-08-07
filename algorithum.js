function searchKeyWords(input) {
    let keyWords = {};
    let keyWordNum = 0;

    inputStringSets[(selectInputStringSetNum) + 1] = input;
    selectInputStringSetNum ++;

    for (let i = 0; i < input.length; i ++) {
        // 一个一个查找字符串的索引字符来判断是否为关键字
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
                isIPAddressReachable(IPParts);
            }
        }
    }
}
function isIPAddressReachable(IPParts) {
    if (IPParts[0] == 0) {// 无效地址 0.0.0.0 - 0.255.255.255
        IPAddressType = invaliedIP;
    } else if (IPParts[0] == 10) {// A类地址 10.0.0.0 - 10.255.255.255
        IPAddressType = privateIP;
    } else if (IPParts[0] == 172) {
        if (IPParts[1] <= 16 && IPParts[1] >= 31) {// B类地址 172.16.0.0 - 172.31.255.255
            IPAddressType = privateIP;
        }
    } else if (IPParts[0] == 192 && IPParts[1] == 168) {// C类地址 192.168.0.0 - 192.168.255.255
        IPAddressType = privateIP;
    } else if (IPParts[0] >= 224) {// D和E类地址 224.0.0.0 - 239.255.255.255, 240.0.0.0 - 255.255.255.255
        IPAddressType = invaliedIP;
    } else {
        IPAddressType = publicIP;
    }
}