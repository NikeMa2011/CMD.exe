// 决策树
const author = "NikeMa2011";
const githubLink = "https://github.com/NikeMa2011/CMD.exe";
const emailAddress = "huz193py@outlook.com";

function run(keyWords) {
    if (keyWords[0] == "ping") {
        ping(keyWords[1]);
    } else if (keyWords[0] == "intro") {
        addParagraph("author: " + author + ", github link: " + githubLink + ", email-address: " + emailAddress);
    } else {
        addParagraph("\'" + keyWords[0] + "\' is not recognized as an internal or external command,");
        addParagraph("operable program or batch file.");
        
        addInputRow();
    }
}