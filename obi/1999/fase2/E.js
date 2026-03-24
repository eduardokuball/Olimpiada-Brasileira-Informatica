export default function longestTunnel(cityOfOrigin, destinationCity, roads) {

    const maxTunnelHeight = [];

    roads.forEach((t) => {
        if (t.cityOfStart === cityOfOrigin) {
            maxTunnelHeight.push(t.tunnelHeight);
        }
    });

    if (maxTunnelHeight.length === 0) return 0;

    return Math.max(...maxTunnelHeight);
}