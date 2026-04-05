export default function findMinimumRouteTime(citiesQuantity, edges) {

    function getPermutations(arr) {
        if (arr.length <= 1) return [arr];

        const result = [];

        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            const perms = getPermutations(remaining);

            for (const perm of perms) {
                result.push([current, ...perm]);
            }
        }

        return result;
    }

    function calculateRouteTime(route, graph) {
        let time = 0;

        for (let i = 0; i < route.length - 1; i++) {
            const u = route[i];
            const v = route[i + 1];

            if (!graph[u] || graph[u][v] === undefined) {
                time += 100000;
            } else {
                time += graph[u][v];
            }
        }

        return time;
    }

    const graph = {};

    for (const [a, b, w] of edges) {
        if (!graph[a]) graph[a] = {};
        if (!graph[b]) graph[b] = {};

        graph[a][b] = w;
        graph[b][a] = w;
    }

    const cities = Array.from({ length: citiesQuantity }, (_, i) => i + 1);
    const lastCity = cities[cities.length - 1];

    const routes = getPermutations(cities);

    const validRoutes = routes.filter(route =>
        route[0] === lastCity || route[route.length - 1] === lastCity
    );

    let minTime = Infinity;

    for (const route of validRoutes) {
        const time = calculateRouteTime(route, graph);
        if (time < minTime) {
            minTime = time;
        }
    }

    return minTime;
}