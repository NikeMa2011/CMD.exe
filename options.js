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
                addParagraph(userLanguage == "zh-CN" ? "\t来自 " + IPAddressString + " 的回复: 时间=" + actuallPingValue + "ms" : "\tReply form: " + IPAddressString + ": time = " + actuallPingValue + "ms");

                pingValueSet[packNum] = actuallPingValue;
                packRecivedNum ++;
            } else {
                addParagraph(userLanguage == "zh-CN" ? "\tPING：传输失败。常见故障。" : "\tPING: transmit failed. General failure.");

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

    addParagraph(userLanguage == "zh-CN" ? IPAddressString + " 的 Ping 统计信息:" : "Ping statistics for " + IPAddressString + ':');
    addParagraph(userLanguage == "zh-CN" ? "\t数据包: 已发送 = " + packTestNum + "，已接收 = " + packRecivedNum + "，丢失 = " + packLosedNum + " (" + packLosedNum / packTestNum * 100 + "% 丢失)，" : "\tPackets: Sent = " + packTestNum + ", Recived = " + packRecivedNum + ", Lost = " + packLosedNum + " (" + packLosedNum / packTestNum * 100 + "% loss),");
    
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

        addParagraph(userLanguage == "zh-CN" ? "往返行程的估计时间(以毫秒为单位):" : "Approximate round trip times in milli-seconds:");
        addParagraph(userLanguage == "zh-CN" ? "\t最短 = " + minimumPingValue + "ms，最长 = " + maxiumPingValue + "ms，平均 = " + averagePingValue + "ms" : "\tMinimum = " + minimumPingValue + "ms, Maximum = " + maxiumPingValue + "ms, Average = " + averagePingValue + "ms");
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
        addParagraph(userLanguage == "zh-CN" ? "用法: ping [-t]" : "Usage: ping [-t]");
        addParagraph(userLanguage == "zh-CN" ? "\t-t\tPing 指定的主机，直到停止。" : "\t-t\tPing the specified host until stopped.");
        addNullParagraph();

        addInputRow();
    } else {
        isIPAddress(IPAddress);
        IPAddressString = IPAddress;

        setRandomPingRange();
        setRandomPingSwing();

        addParagraph(userLanguage == "zh-CN" ? "正在 " + IPAddressString + " 具有 32 字节的数据:" : "Pinging " + IPAddressString + " with 32 bytes of data:");

        if (IPAddressType == publicIP) {
            request(0);
        } else if (IPAddressType == invalidIP || IPAddressType == privateIP) {
            failPing = true;
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

    if (!prePrintedVersion) {
        addParagraph(userLanguage == "zh-CN" ? "输入 \"intro\" 以获得更多信息." : "Type \"intro\" to get more information.");
    }
}
function copyRight() {
    addParagraph("(c) Microsoft Corporation" + (userLanguage == "zh-CN" ? "。 保留所有权利。" : ". All rights reserved."));
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

    versionOutputString = "Microsoft Windows ";

    if (windowsVersion != "Error") {
        versionOutputString += '[' + (userLanguage == "zh-CN" ? "版本" : "Version") + ' ' + windowsVersion + "]";
    }

    addParagraph(versionOutputString);

    if (!prePrintedVersion) {
        copyRight();
        prePrintedVersion = true;
    }

    addNullParagraph();

    addInputRow();
}

function invalidInput(input) {
    addParagraph("\'" + input + "\'" + (userLanguage == "zh-CN" ? " 不是内部或外部命令，也不是可运行的程序" : " is not recognized as an internal or external command"));
    addParagraph(userLanguage == "zh-CN" ? "或批处理文件。" : "operable program or batch file.");
    addNullParagraph();

    addInputRow(); 
}

function introduce() {
    addParagraph(userLanguage == "zh-CN" ? "免责声明:" : "The disclaimer:");
    disclaimer();

    addNullParagraph();

    addParagraph(userLanguage == "zh-CN" ? "此 Windows 命令提示符模拟器 是一个在 Github 的开源项目。" : "This open-source Windows command prompt simulator project is on Github.");
    addNullParagraph();
    addParagraph((userLanguage == "zh-CN" ? "这个项目的作者: " : "Author of this project: ") + author);
    addParagraph((userLanguage == "zh-CN" ? "这个项目的 Github 地址URL: \"" : "Github repository URL: \"") + githubLink + "\"");
    addParagraph((userLanguage == "zh-CN" ? "联系方式: \"" : "Contact: \"") + emailAddress + "\"");
    addNullParagraph();

    addInputRow();
}