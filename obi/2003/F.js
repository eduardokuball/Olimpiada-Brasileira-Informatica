function collectPlayersData(quantity) {
    const report = [];
    for (let i = 0; i < quantity; i++) {
        const player = prompt(`nome do jogador ${i + 1}`);
        const results = prompt('digite os resultados')
            .split(' ')
            .map(Number);
        const pontuation = calculatePontuation(results);
        report.push({ player, pontuation });
    }
    return report;
}

function calculatePontuation(results) {
    results.sort((a, b) => a - b);
    results.shift(); 
    results.pop();   
    return results.reduce((a, b) => a + b, 0); 
}

function sortPlayersByPontuation(report) {
    return report.sort((a, b) => b.pontuation - a.pontuation);
}

function displayReport(report) {
    report.forEach((r, index) => {
        console.log(`${index + 1} ${r.player} ${r.pontuation}`);
    });
}

const quantity = Number(prompt());
const report = collectPlayersData(quantity);
const sortedReport = sortPlayersByPontuation(report);

displayReport(sortedReport);
