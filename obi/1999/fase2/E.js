export default function longestTunnel(cityOfOrigin, destinationCity, lines) {

    console.log(lines);

    const road = [];

    for (let line of lines) {
        const [cityOfStart, cityOfEnd, tunnelHeight] = line.split(' ').map(Number);

        if (cityOfStart === 0 || cityOfEnd === 0) break;

        road.push({
            cityOfStart,
            cityOfEnd,
            tunnelHeight
        });
    }

    const maxTunnelHeight = [];

    road.forEach((t) => {
        if (t.cityOfStart === cityOfOrigin) {
            maxTunnelHeight.push(t.tunnelHeight);
        }
    });

    if (maxTunnelHeight.length === 0) return 0;

    return Math.max(...maxTunnelHeight);
}