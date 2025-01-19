function processRounds(rounds) {
    let aldo = 0;
    let beto = 0;

    for (let i = 0; i < rounds; i++) {
        const [n1, n2] = prompt()
            .split(' ')
            .map(Number);
        aldo += n1;
        beto += n2;
    }

    return [aldo, beto] ;
}

function determineWinner(aldo, beto) {
    return aldo > beto ? 'Aldo' : 'Beto';
}

const rounds = Number(prompt());

const [aldo, beto] = processRounds(rounds);
const winner = determineWinner(aldo, beto);

console.log(winner);
