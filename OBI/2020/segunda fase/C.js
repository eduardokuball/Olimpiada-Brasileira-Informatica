import Graph from "../../../utils/graph.js";
import Permutations from "../../../utils/permutation.js";

function calculateRouteTime(route) {
    let time = 0;
    for (let i = 0; i < route.length - 1; i++) {
        try {
            time += graph.getEdgeWeight(route[i], route[i + 1]);
        } catch (error) {
            time += 100000;
        }
    }
    return time;
}

const citiesQuantity = parseInt(prompt());
const paths = citiesQuantity * (citiesQuantity-1) / 2;

const cities = Array(citiesQuantity).fill()
    .map((_, i) => i + 1);

const graph = new Graph(true);
graph.addVertexes(...cities);

for (let i = 1; i <= paths; i++) {
    const [v1, v2, time] = prompt().split(' ', 3)
        .map(e => parseInt(e));

    graph.addEdge(v1, v2, time);
}

graph.showGraph();



const lastCity = cities[cities.length - 1];
const routes = Permutations.withoutRepetition(cities);
const valideRoutes = routes.filter(route => route[0] === lastCity || route[route.length-1] === lastCity);


const times = valideRoutes.map(route => calculateRouteTime(route));
times.sort((a, b) => a - b);
console.log(times[0]);