// 函数
function request(packNum) {
    if (packNum > 3) {
        pingFinsh();
    } else {
        pingValue = randomPing();
        actuallPingValue = Math.floor(pingValue / 2);

        setTimeout(() => {
            if (pingValue <= 1000) {
                addParagraph("\tReply form: " + IPAddressString + ": time = " + actuallPingValue + "ms");

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
    
    if (packRecivedNum != 0) {
        for (let i = 0; i < 4; i ++) {
            totalPingValue += pingValueSet[i];

            if (pingValueSet[i] > maxiumPingValue) {
                maxiumPingValue = pingValueSet[i];
            } else if (pingValueSet[i] < minimumPingValue) {
                minimumPingValue = pingValueSet[i];
            }
        }

        averagePingValue = Math.floor(totalPingValue / 4);
        totalPingValue = 0;
        pingValueSet = [];

        addParagraph("Approximate round trip times in milli-seconds:");
        addParagraph("\tMinimum = " + minimumPingValue + "ms, Maximum = " + maxiumPingValue + "ms, Average = " + averagePingValue + "ms");
        addNullPadagraph();

        minimumPingValue, maxiumPingValue, averagePingValue = 0;

        averagePingValue = 0;
    } else {
        addParagraph();
    }
    addInputRow();
}
function ping(IPAddress) {
    if (IPAddress == undefined) {
        addParagraph("Usage: ping [host]");
        addParagraph("\tPing the specified host(IPv4 only) until stopped.");
        addNullPadagraph();

        addInputRow();
    } else { 
        if (isIPAddress(IPAddress)) {
            IPAddressString = IPAddress;

            setRandomPingRange();
            setRandomPingSwing();

            addParagraph("Pinging " + IPAddressString + " with 32 bytes of data:");
            request(0);
        } else {
            addParagraph("Ping request could not find host " + IPAddress + " . Please check the name and try again.");
            addNullPadagraph();

            addInputRow();
        }
    }
}