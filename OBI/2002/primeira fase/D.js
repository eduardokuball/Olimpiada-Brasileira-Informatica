function getConnections(flights) {
    const connections = [];
    for (let i = 0; i < flights; i++) {
        const flight = prompt()
        .split(' ')
        .map(e => parseInt(e));
        connections.push(flight[0]);
        connections.push(flight[1]);
    }
    return connections;
}

function countOccurrences(connections) {
    const ocurrences = [];
    connections.forEach((v) => {
        const existing = ocurrences.find(o => o.airport === v);
        if (existing) {
            existing.quantity++;
        } else {
            ocurrences.push({ airport: v, quantity: 1 });
        }
    });
    return ocurrences;
}

function findMostVisitedAirports(ocurrences) {
    let most = 0;
    ocurrences.forEach((v) => {
        if (v.quantity > most) most = v.quantity;
    });

    const mostVisitedAirports = ocurrences
        .filter(v => v.quantity === most)
        .map(v => v.airport);

    return mostVisitedAirports;
}

function displayResult(mostVisitedAirports) {
    console.log(mostVisitedAirports.join(' '));
}

const [airports, flights] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const connections = getConnections(flights);

const ocurrences = countOccurrences(connections);

const mostVisitedAirports = findMostVisitedAirports(ocurrences);

displayResult(mostVisitedAirports);
