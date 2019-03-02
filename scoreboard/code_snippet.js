function getScoreboardCommands(score = 0) {
    score = parseInt(score);
    let commands = [];
    let count = 0;
    while (score > 0) {
        let digit = score % 10;
        score = parseInt(score / 10);
        commands.push({
            "type": "SetPage",
            "componentId": "scoreboardSpinner" + count,
            "value": digit
        });
        count++;
    }
    return commands;
}