// 决策树
const author = "NikeMa2011";
const githubLink = "https://github.com/NikeMa2011/";
const emailAddress = "huz193py@outlook.com";

const error = "[Error]";
const warn = "[Warn]";

function run(keyWords) {
    if (keyWords[0] == "ping") {
        if (keyWords[1] == undefined) {
            addParagraph(error + "didn`t metion the IP address.");
            addInputLine();
        } else if (IsIPAddress(keyWords[1])) {
            ping(keyWords[1]);
        }
    } else if (keyWords[0] == "intro") {
        addParagraph("author: " + author + ", github link: " + githubLink + ", email-address: " + emailAddress);
    } else {
        addParagraph(error + "invalid input.");
        addInputLine();
    }
}