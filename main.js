// 定义
const input = document.getElementById("input");
const showLocationRow = document.getElementById("showLocation");

let inputStringSets = [];
let selectInputStringSetNUm = 0;

let selectInputRow = 0;
let inputString = "", inputKey = '';
let inputLocation = 0;
const preString = ">";

let slashBool = true;
let slash;

let frontString, backString;

let newElement;
let selectInputRowNum = 0;


let inputRowStringLength = 0;

const waitFrame1 = ['-', '\\', '|', '/'];
const waitFrame2 = ['o', 'O', '0', 'O'];

const specialKeys = ["Enter", "Shift", "Backspace", "ArrowLeft", "ArrowRight"];
const involvedKeys = ["Escape", "Control", "Alt", "Tab", "Fn", "CapsLock", "ArrowUp", "ArrowDown",
                      "Meta", "AudioVolumeMute", "AudioVolumUp", "AudioVlolumeDown",
                      "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"];

// Meta = Windows key ↑

// ┌─┬─┐ 
// ├─┼─┤ Microsoft Windows Oprating System 11 // 所以说微软你更了个什么玩意
// └─┴─┘ 

// const allowedKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', "K", 'M', 'L', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
//                     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'n', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
//                     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '/', ':', '<', '>', '?', ',', '.', ';', '[', ']', '{', '}', '-', '=', '_', '+', '!', '@', '#', '$', 
//                     '%', '^', '&', '*', '(', ')']; // dont use this

let IPAddressString = null;

let actuallPingValue, pingValue = 0;
let randomPingRange, randomPingSwing = 0;

let packLosedNum = 0, packRecivedNum = 0;
let minimumPingValue = 999, maxiumPingValue = 0;

let pingValueSet = [];
let totalPingValue = 0, averagePingValue;

const packTestNum = 4;

// 底层
function setRandomPingRange() {
    randomPingRange = Math.floor(Math.random() * 1500);
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