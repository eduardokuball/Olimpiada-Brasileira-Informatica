const [airports, flights] = prompt('aeroportos e voos')
.split(' ')
.map(Number);

const connections = [];

for (let i = 0; i < flights; i++) {
    const flight = prompt(`digite o voo ${i + 1}: aeroporto de origem, aeroporto de destino`)
    .split(' ')
    .map(Number);
    connections.push(flight[0]);
    connections.push(flight[1]);
}

const ocurrences = [];
let most = 0;

connections.forEach((v) => {
    ocurrences.push({
        airport: v,
        quantity: connections.filter(item => item === v).length
    });
    ocurrences.forEach((v) => {
        if (v.quantity > most) most = v.quantity;
    });
});

const mostVisitedAirpost = [];

ocurrences.forEach((v) => {
    if (v.quantity == most && !mostVisitedAirpost.includes(v.airport)) {
        mostVisitedAirpost.push(v.airport);
    }
});

console.log(mostVisitedAirpost.join(' '));