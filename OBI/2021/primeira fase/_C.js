function registerData(quantity) {
    const registers = [];
    const friends = [];

    for (let i = 0; i < quantity; i++) {
        const register = prompt()
            .split(' ');
        const typeRegister = register[0].toUpperCase();
        const personOrTime = register[1];
        
        registers.push({
            type: typeRegister,
            personOrTime: personOrTime
        });

        if (typeRegister === 'R' && !friends.includes(personOrTime)) {
            friends.push(personOrTime);
        }
    }

    return [registers, friends];
}

function calculateResponseTimes(registers, friends) {
    const timesAnswers = [];

    friends.forEach((f) => {
        let time = 0;
        let answered = false;
        let alreadySentAMessage = false;
        let isT = false;

        registers.forEach((r) => {
            if (r.type === 'R' && r.personOrTime === f) {
                answered = false;
                if (!alreadySentAMessage) {
                    time = 0;
                    alreadySentAMessage = true;
                }
                isT = false;
            } else if (r.type === 'T') {
                time += Number(r.personOrTime);
                isT = true;
            } else if (r.type === 'E' && r.personOrTime === f) {
                answered = true;
                if (!isT) {
                    time++;
                }
            } else if (r.type === 'E' && r.personOrTime !== f) {
                time++;
            }
        });

        timesAnswers.push(answered ? time : -1);
    });

    return timesAnswers;
}

function displayResults(friends, timesAnswers) {
    for (let i = 0; i < timesAnswers.length; i++) {
        console.log(friends[i] + ':' + timesAnswers[i]);
    }
}

const quantity = Number(prompt());

const [registers, friends] = registerData(quantity);

const timesAnswers = calculateResponseTimes(registers, friends);

displayResults(friends, timesAnswers);
