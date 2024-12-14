function generateTunnels(num) {
    const tunnels = [];

    for (let i = 1; i <= num; i++) {
        const tunnel = prompt()
            .split(' ')
            .slice(0, 2)
            .map(e => parseInt(e));

        const lennut = tunnel.toReversed();

        const stringifiedTunnel = JSON.stringify(tunnel);
        const stringifiedLennut = JSON.stringify(lennut);

        tunnels.push(stringifiedTunnel);
        tunnels.push(stringifiedLennut);
    };

    return tunnels;
};

function generateTours(num) {
    const tours = [];

    for (let i = 1; i <= num; i++) {
        const tour = prompt()
            .split(' ')
            .map(e => parseInt(e));

        tour.shift();
        tours.push(tour);
    };

    return tours;
};

function isValirTour(tour, tunnels) {
    for (let i = 0; i < tour.length; i++) {
        const room = tour[i];
        const lastRoomIndex = tour.length - 1;

        if (i === lastRoomIndex) break;

        const sucessor = tour[i + 1];

        const roomPair = [room, sucessor];
        const stringifiedPair = JSON.stringify(roomPair);
        
        const invalidTour = !tunnels.includes(stringifiedPair);

        if (invalidTour) return false;
    };

    return true;
};

const tunnelsData = prompt()
    .split(' ')
    .slice(0, 2)
    .map(e => parseInt(e));

const tunnels = generateTunnels(tunnelsData[1]);

const numTours = parseInt(prompt());
const tours = generateTours(numTours);

let validTours = 0;

tours.forEach(tour => {
    const isValid = isValirTour(tour, tunnels);

    if (isValid) validTours++;
});

console.log(validTours);