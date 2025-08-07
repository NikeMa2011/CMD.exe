// 决策树
const author = "NikeMa2011";
const githubLink = "https://github.com/NikeMa2011/CMD.exe";
const emailAddress = "huz193py@outlook.com";

function run(keyWords) {
    if (keyWords[0] == "ping") {
        ping(keyWords[1]);
    } else if (keyWords[0] == "intro") {
        introduce();
    } else {
        invalidInput(keyWords[0]);
    }
}