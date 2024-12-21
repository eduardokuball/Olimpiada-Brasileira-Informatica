let quantity = Number(prompt('digite o número de jogadores'));
let report = [];

for(let i = 0; i < quantity; i++){
    let player = prompt(`nome do jogador ${i + 1}`);
    let results = prompt('digite os resultados')
    .split(' ')
    .map(Number);
    results.sort((a,b) => a - b);
    results.shift();
    results.pop();
    let sum = results.reduce((a, b) => a + b, 0);
    report.push({
        player: player,
        pontuation:sum,
    })
};

report.sort((a, b) => b.pontuation - a.pontuation);

report.forEach((r) => {
    console.log(`${report.indexOf(r) + 1} ${r.player} ${r.pontuation}`);
});