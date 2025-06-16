// 从作者的本地设备复制的qwq
// Author: NikeMa2011(github)
// 2025年5月6日
let debugIsON = false;

function Cout(string, value) {
    if (value == undefined) {
        console.log(string);
    } else if (value == "warn") {
        console.warn(string);
    } else if (value == "error") {
        console.error(string);
    } else {
        console.log("参数 value 的输入是无效的");
    }
}
function debug(value) {
    if (value == undefined) {
        if (debugIsON) {
            debugIsON = false;
        } else if (!debugIsON) {
            debugIsON = true;
        }
    } else {
        if (value == "true" || value == 1 || value == "on") {
            if (debugIsON) {
                Cout("debugisON 已经为 真(" + debugIsON + ")");
            }
            debugIsON = true;
        } else if (value == "false" || value == 0 || value == "off") {
            if (!debugIsON) {
                Cout("debugisON 已经为 假(" + debugIsON + ")");
            }
        } else {
            Cout("参数 value 的输入是无效的");
        }
    }
}

// 完成