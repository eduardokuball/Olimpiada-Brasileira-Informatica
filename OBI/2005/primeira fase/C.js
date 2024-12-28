const [quantity, rounds] = prompt('jogadores e rounds')
.split(' ')
.map(Number);
let players = prompt('digite a ordem dos jogadores')
.split(' ')
.map(Number);

for (let i = 0; i < rounds; i++) {
    const input = prompt('jogadores, ordem, relatório')
    .split(' ')
    .map(Number);
    const player = input[0];
    const order = input[1];
    const reportplayers = input.slice(-player);
    reportplayers.forEach((r) => {
        if (r != order) {
            const index = reportplayers.indexOf(r);
            players.splice(index, 1);
        }
    });
}

console.log(players.join(' '));