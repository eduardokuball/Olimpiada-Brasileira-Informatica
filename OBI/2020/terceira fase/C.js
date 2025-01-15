// Inteiro N (Nº de mensagens)
// Cada uma das N linhas seguintes contem o índice de repostagem (Ri) de cada mensagem

// Reposta uma mensagem -> Seus seguidores podem ve-la e repostar também.

Array.prototype.count = function(callback = (e, i, arr) => {}) {
    let counter = 0;

    this.forEach((e, i, arr) => {
        if (callback(e, i, arr)) counter++;
    });

    return counter;
}


const messages = parseInt(prompt());

const messageIndexes = [];

for (let i = 1; i <= messages; i++) {
    const messageIndex = parseInt(prompt());
    messageIndexes.push(messageIndex);
}

let influenceIndexCounter = 1;
let influenceIndex = null;

messageIndexes.forEach(msg => {
    const number = messageIndexes
        .count(e => e >= influenceIndexCounter)

    if (number >=influenceIndexCounter)
        influenceIndex = influenceIndexCounter;

    influenceIndexCounter++;
});

console.log(influenceIndex);
