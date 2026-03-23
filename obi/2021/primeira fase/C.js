const registers = parseInt(prompt()); 

function timesAnswers(registers) {
    const timesAnswers = {};
    const waitingAnswer = {};
    let lastTime = 0;

    for (let i = 0; i < registers; i++) {
        const input = prompt()
            .split(" ");
        const type = input[0].toUpperCase();
        const timeOrFriend = parseInt(input[1]);

        if (type === "T") {
            lastTime = lastTime + timeOrFriend - 1;
        } else {
            lastTime += 1;
        }

        if (type === "R") {
            if (!timesAnswers.hasOwnProperty(timeOrFriend)) {
                timesAnswers[timeOrFriend] = 0;
            }
            waitingAnswer[timeOrFriend] = lastTime;
        } else if (type === "E") {
            if (waitingAnswer.hasOwnProperty(timeOrFriend)) {
                timesAnswers[timeOrFriend] += (lastTime - waitingAnswer[timeOrFriend]);
                delete waitingAnswer[timeOrFriend];
            }
        }
    }
    for (const friend in waitingAnswer) {
        timesAnswers[friend] = -1;
    }
    Object.keys(timesAnswers).sort((a, b) => a - b);
    return timesAnswers;
}

const times = timesAnswers(registers);

for(const key in times){
    console.log(`${key} ${times[key]}`);
};

