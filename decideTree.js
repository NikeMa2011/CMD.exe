// 决策树
const author = "NikeMa2011";
const githubLink = "https://github.com/NikeMa2011/";
const emailAddress = "huz193py@outlook.com";

const error = "[Error]";
const warn = "[Warn]";

function run(keyWords) {
    if (keyWords[0] == "ping") {
        ping(keyWords[1]);
    } else if (keyWords[0] == "intro") {
        addParagraph("author: " + author + ", github link: " + githubLink + ", email-address: " + emailAddress);
    } else {
        addParagraph(error + "invalid input.");
        addInputRow();
    }
}