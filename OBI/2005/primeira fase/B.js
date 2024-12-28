const [stations, transmissionLines] = prompt('estações e linhas de transmição')
.split(' ')
.map(Number);
const connections = [];

for (let i = 0; i < transmissionLines; i++) {
    const [x, y] = prompt('digite as estações ligadas')
    .split(' ')
    .map(Number);
    connections.push(x);
    connections.push(y);
}

function allConnections() {
    for (let i = 0; i < stations; i++) {
        const station = i + 1;
        if (!connections.includes(station)) {
            return "falha";
        }
    }
    return "normal";
}

console.log(allConnections());