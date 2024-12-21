let tunnelsData = prompt()
    .split(' ')
    .slice(0, 2)
    .map(e => parseInt(e));

    function generateTunnels(num) {
        let tunnels = [];
    
        for (let i = 1; i <= num; i++) {
            let tunnel = prompt()
                .split(' ')
                .slice(0, 2)
                .map(e => parseInt(e));
    
            let lennut = tunnel.toReversed();
    
            let stringifiedTunnel = JSON.stringify(tunnel);
            let stringifiedLennut = JSON.stringify(lennut);
    
            tunnels.push(stringifiedTunnel);
            tunnels.push(stringifiedLennut);
        };
    
        return tunnels;
    };
    
    function generateTours(num) {
        let tours = [];
    
        for (let i = 1; i <= num; i++) {
            let tour = prompt()
                .split(' ')
                .map(e => parseInt(e));
    
            tour.shift();
            tours.push(tour);
        };
    
        return tours;
    };
    
    function isValirTour(tour, tunnels) {
        for (let i = 0; i < tour.length; i++) {
            let room = tour[i];
            let lastRoomIndex = tour.length - 1;
    
            if (i === lastRoomIndex) break;
    
            let sucessor = tour[i + 1];
    
            let roomPair = [room, sucessor];
            let stringifiedPair = JSON.stringify(roomPair);
            
            let invalidTour = !tunnels.includes(stringifiedPair);
    
            if (invalidTour) return false;
        };
    
        return true;
    };

let tunnels = generateTunnels(tunnelsData[1]);

let numTours = parseInt(prompt());
let tours = generateTours(numTours);

let validTours = 0;

tours.forEach(tour => {
    let isValid = isValirTour(tour, tunnels);

    if (isValid) validTours++;
});

console.log(validTours);