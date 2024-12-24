const [cityOfOrigin, destinationCity] = prompt('cidade de saída e destino')
.split(" ")
.map(Number);

const road = [];

while (true) {
    const input = prompt('cidade onde a estrada inicia, a cidade onde a estrada termina e a altura do viaduto ou túnel mais baixo no trajeto').split(" ").map(Number);
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

function longestTunnel() {
    const maxTunnelHeight = [];
    road.forEach((t) => {
        if (t.cityOfStart == cityOfOrigin) {
            maxTunnelHeight.push(t.tunnelHeight);
        }
    });
    return Math.max(...maxTunnelHeight);
}

console.log(longestTunnel());