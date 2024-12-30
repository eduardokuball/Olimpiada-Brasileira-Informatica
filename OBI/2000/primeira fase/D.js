const quantityGames = Number(prompt());

const golsFor = [];
const golsAgainst = [];
const positiveBalanceGames = [];

for (let i = 0; i < quantityGames; i++) {
    const game = prompt()
        .split(" ")
        .map(e => parseInt(e));
    golsFor.push(game[0]);
    golsAgainst.push(game[1]);
}

for (let i = 0; i < quantityGames; i++) {
    if (golsFor[i] > golsAgainst[i]) {
        positiveBalanceGames.push(i + 1);
    }
}

function bestGames() {
    if (positiveBalanceGames.length === 0) {
        return "Nenhum"; 
    } else {
        return `${positiveBalanceGames[0]} ${positiveBalanceGames.at(-1)}`;
    }
}

console.log(bestGames());