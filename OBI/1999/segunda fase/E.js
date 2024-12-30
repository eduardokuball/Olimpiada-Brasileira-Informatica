function longestTunnel() {
    const maxTunnelHeight = [];
    road.forEach((t) => {
        if (t.cityOfStart == cityOfOrigin) {
            maxTunnelHeight.push(t.tunnelHeight);
        }
    });
    return Math.max(...maxTunnelHeight);
}

const [cityOfOrigin, destinationCity] = prompt()
    .split(" ")
    .map(e => parseInt(e));

const road = [];

while (true) {
    const input = prompt()
    .split(" ")
    .map(e => parseInt(e));
    const cityOfStart = input[0];
    const cityOfEnd = input[1];
    const tunnelHeight = input[2];

    if (cityOfStart == 0 || cityOfEnd == 0) {
        break;
    }

    road.push({
        cityOfStart: cityOfStart,
        cityOfEnd: cityOfEnd,
        tunnelHeight: tunnelHeight
    });
}



console.log(longestTunnel());