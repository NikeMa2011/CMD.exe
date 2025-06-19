// 函数
function request(packNum) {
    if (packNum > 3) {
        pingFinsh();
    } else {
        pingValue = randomPing();
        actuallPingValue = Math.floor(pingValue / 2);

        setTimeout(() => {
            if (pingValue <= 1000) {
                addParagraph("\tReply form: " + IPAddressString + ": time = " + actuallPingValue + "ms TTL = 64");

                pingValueSet[packNum] = actuallPingValue;
                packRecivedNum ++;
            } else {
                addParagraph("\tPING: transmit failed. General failure.");

                packLosedNum ++;
            }

            request(packNum += 1);
        }, pingValue);
    }
}
function pingFinsh() {
    pingValue = 0;

    addNullPadagraph();

    addParagraph("Ping statistics for " + IPAddressString + ':');
    addParagraph("\tPackets: Sent = " + packTestNum + ", Recived = " + packRecivedNum + ", Lost = " + packLosedNum + " (" + packLosedNum / packTestNum * 100 + '% loss),');
    if (!packRecivedNum == 0) {
        for (let i = 0; i < 4; i ++) {
            totalPingValue += pingValueSet[i];
        }

        averagePingValue = Math.floor(totalPingValue / 4);
        totalPingValue = 0;
        pingValueSet = [];

        addParagraph(pingTestResultString + "average ping: " + averagePingValue + "ms.");

        averagePingValue = 0;
    } else {
        addParagraph();
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

        addParagraph("Pinging " + IPAddressString + " with 32 bytes of data:");
        request(0);
    }
}