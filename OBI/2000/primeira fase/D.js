const quantityGames = Number(prompt("digite a quantidade de jogos"));

const golsFor = [];
const golsAgainst = [];
const positiveBalanceGames = [];

for (let i = 0; i < quantityGames; i++) {
    const game = prompt("digite o placar do jogo : " + (i + 1) + "")
    .split(" ")
    .map(Number);
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