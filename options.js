function setRandomPingRange() {
    randomPingRange = Math.floor(Math.random() * 10000);
}
function setRandomPingSwing() {
    randomPingSwing = Math.floor(Math.random() * 100);
}
function randomNum(num) {
    return Math.floor(Math.random() * num);
}
function randomPing() {
    return Math.floor(Math.random() * randomPingSwing) + randomPingRange;
}
function setRandomIP(num) {
    IPAddressString += randomNum(255);

    if (num < 3) {
        IPAddressString += '.';
        setRandomIP(num += 1);
    }
}
function request(packNum) {
    if (packNum > 3) {
        pingFinsh();
    } else {
        if (failPing) {
            actuallPingValue = 5000;
        } else {
            pingValue = randomPing();
            actuallPingValue = Math.floor(pingValue / 2);
        }
        setTimeout(() => {
            if (actuallPingValue < 5000) {
                addParagraph("\tReply form: " + IPAddressString + ": time = " + actuallPingValue + "ms");

                pingValueSet[packNum] = actuallPingValue;
                packRecivedNum ++;
            } else {
                addParagraph("\tPING: transmit failed. General failure.");

                packLosedNum ++;
            }

            request(packNum += 1);
        }, actuallPingValue);
    }
}
function pingFinsh() {
    failPing = false;
    pingValue = 0;

    addNullParagraph();

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
        addNullParagraph();

        minimumPingValue, maxiumPingValue, averagePingValue = 0;

        averagePingValue = 0;
    } else {
        addNullParagraph();
    }
    addInputRow();
}
function ping(IPAddress) {
    if (IPAddress == undefined) {
        addParagraph("Usage: ping [host]");
        addParagraph("\tPing the specified host(IPv4 only) until stopped.");
        addNullParagraph();

        addInputRow();
    } else {
        isIPAddress(IPAddress);
        IPAddressString = IPAddress;

        if (IPAddressType == publicIP) {
            setRandomPingRange();
            setRandomPingSwing();

            addParagraph("Pinging " + IPAddressString + " with 32 bytes of data:");

            request(0);
        } else if (IPAddressType == invalidIP || IPAddressType == privateIP) {
            failPing = true;

            addParagraph("Pinging " + IPAddressString + " with 32 bytes of data:");

            request(0);
        } else {
            addParagraph("Ping request could not find host " + IPAddress + " . Please check the name and try again.");
            addNullParagraph();

            addInputRow();
        }
    }
}

function introduce() {
    addParagraph("author: " + author + ", github link: " + githubLink + ", email-address: " + emailAddress);
    addNullParagraph();
    
    addInputRow();
}

function disclaimer() {
    addParagraph(userLanguage == "zh-CN" ? "此 Windows 命令提示符 只是一个模拟器, 并不属于 Microsoft 公司." : "This Windows command prompt is only an simulator, not belong to Microsoft Corporation.");
    addParagraph(userLanguage == "zh-CN" ? "输入 \"intro\" 以获得更多信息." : "Type \"intro\" to get more information.");
}
function copyRight() {
    addParagraph(userLanguage == "zh-CN" ? "(c) Microsoft Corporation. 版权所有." : "(c) Microsoft Corporation. All rights reserved.");
    addNullParagraph();

    disclaimer();
}
function getVersion() {
    if (userAgent.includes("Windows NT 10.0")) windowsVersion = "10.0.19045.2006";
    else if (userAgent.includes("Windows NT 11")) windowsVersion = "10.0.26100.4652";
    else if (userAgent.includes("Windows NT 6.1")) windowsVersion = "6.1.7601.5092";// yo that NT 6.1 is Windows 7
    else windowsVersion = "Error";
}
function version() {
    getVersion();

    versionOutputString = "Microsoft Windows";

    if (windowsVersion != "Error") {
        versionOutputString += " [Version " + windowsVersion + "]";
    }

    addParagraph(versionOutputString);

    if (!prePrint) {
        copyRight();
        prePrint = true;
    }

    addNullParagraph();

    addInputRow();
}

function invalidInput(input) {
    addParagraph("\'" + input + "\' is not recognized as an internal or external command,");
    addParagraph("operable program or batch file.");
    addNullParagraph();

    addInputRow(); 
}

function introduce() {
    addParagraph("The disclaimer:");
    disclaimer();

    addNullParagraph();

    addParagraph("This Windows command prompt simulator project is in Github.");
    addNullParagraph();
    addParagraph("Author of this project: " + author);
    addParagraph("Repository URL: \"" + githubLink + "\"");
    addParagraph("Contact: \"" + emailAddress + "\"");
    addNullParagraph();

    addInputRow();
}