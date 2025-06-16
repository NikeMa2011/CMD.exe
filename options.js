// 函数
function request(packNum) {
    if (packNum > 3) {
        pingFinsh();
    } else {
        pingValue = randomPing();
        actuallPingValue = Math.floor(pingValue / 2);

        setTimeout(() => {
            if (pingValue <= 1000) {
                addParagraph("\trequest form: " + IPAddressString + ", delay: " + actuallPingValue + "ms, recived.");

                pingValueSet[packNum] = actuallPingValue;
                packRecivedNum ++;
            } else {
                addParagraph("\trequest timeout.");

                packLosedNum ++;
            }

            request(packNum += 1);
        }, pingValue);
    }
}
function pingFinsh() {
    pingValue = 0;

    pingTestResultString = "ping result: should recived: " + packTestNum + ", total pack recived: " + packRecivedNum + ", total pack losted: " + packLosedNum + ", lost pack value: " + packLosedNum / packTestNum * 100 + '%';

    addParagraph("\n");
    if (packRecivedNum != 0) {
        for (let i = 0; i < 4; i ++) {
            totalPingValue += pingValueSet[i];
        }

        averagePingValue = Math.floor(totalPingValue / 4);
        totalPingValue = 0;
        pingValueSet = [];

        addParagraph(pingTestResultString + ", average ping: " + averagePingValue + "ms.");

        averagePingValue = 0;
    } else {
        addParagraph(pingTestResultString + '.');
    }
    addInputLine();
}
function ping(IPAddress) {
    if (IPAddress == null) {
        addParagraph("didn t define the IP adress.");
    } else {
        IPAddressString = IPAddress;

        setRandomPingRange();
        setRandomPingSwing();

        addParagraph("ping to the IP address: " + IPAddressString);
        request(0);
    }
}