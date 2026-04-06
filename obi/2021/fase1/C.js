export default function calculateAnswerTimes(registersData) {
    const timesAnswers = {};
    const waitingAnswer = {};
    let lastTime = 0;

    for (let i = 0; i < registersData.length; i++) {
        const [typeRaw, value] = registersData[i];
        const type = typeRaw.toUpperCase();
        const timeOrFriend = value;

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

    const sortedKeys = Object.keys(timesAnswers).sort((a, b) => a - b);

    return sortedKeys.map(key => `${key} ${timesAnswers[key]}`);
}