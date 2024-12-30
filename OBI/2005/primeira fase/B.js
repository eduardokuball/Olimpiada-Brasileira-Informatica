function collectConnections(transmissionLines) {
    const connections = [];
    for (let i = 0; i < transmissionLines; i++) {
        const [x, y] = prompt()
            .split(' ')
            .map(Number);
        connections.push(x);
        connections.push(y);
    }
    return connections;
}

function checkAllConnections(stations, connections) {
    for (let i = 0; i < stations; i++) {
        const station = i + 1;
        if (!connections.includes(station)) {
            return "falha";
        }
    }
    return "normal";
}

const [stations, transmissionLines] = prompt('Digite o número de estações e linhas de transmissão')
    .split(' ')
    .map(Number);

const connections = collectConnections(transmissionLines);
const statusConnection = checkAllConnections(stations, connections);

console.log(statusConnection);
