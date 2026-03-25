export default function mostVisitedAirports(flightsConnections) {

    const ocurrences = [];

    flightsConnections.forEach((v) => {
        const existing = ocurrences.find(o => o.airport === v);

        if (existing) {
            existing.quantity++;
        } else {
            ocurrences.push({ airport: v, quantity: 1 });
        }
    });

    let most = 0;
    ocurrences.forEach((v) => {
        if (v.quantity > most) most = v.quantity;
    });

    const mostVisited = ocurrences
        .filter(v => v.quantity === most)
        .map(v => v.airport);

    return mostVisited.join(' ');
}