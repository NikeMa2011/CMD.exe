function run(keyWords) {
    if (keyWords[0] == "ping") {
        ping(keyWords[1]);
    } else if (keyWords[0] == "intro") {
        introduce();
    } else {
        invalidInput(keyWords[0]);
    }
}