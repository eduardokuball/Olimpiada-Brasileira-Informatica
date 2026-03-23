export default function bestGames(quantityGames, lines) {

    const games = [];

    console.log(lines);

    for (let i = 0; i < quantityGames; i++) {
        const [golsFor, golsAgainst] = lines[i].split(' ').map(Number);
        games.push([golsFor, golsAgainst]);
   
    }

    const positiveBalanceGames = [];

    for (let i = 0; i < games.length; i++) {
        const [golsFor, golsAgainst] = games[i];

        if (golsFor > golsAgainst) {
            positiveBalanceGames.push(i + 1);
        }
    }

    if (positiveBalanceGames.length === 0) {
        return "Nenhum";
    }

    return `${positiveBalanceGames[0]} ${positiveBalanceGames.at(-1)}`;
}