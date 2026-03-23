import Graph from '../../../utils/Graph.js';

const graph = new Graph(true);

const cities = parseInt(prompt());

for(let i = 1; i < cities + 1; i++){
    graph.addVertexes(i);
};


for(let i = 0; i < cities - 1; i++){
    const [a, b] = prompt()   
        .split(' ')
        .map(e => parseInt(e));
    graph.addEdge(a, b, 1);
};

function allRoutes(cities){
    const routes = [];
    for(let i = 2; i < cities + 1; i++){
        routes.push(graph.allPathsFrom(1, i));
    };
    return routes;
};

const routes = allRoutes(cities).flat();

function calculateKm(routes){
    let total = 0;
    let totals = [];
    for(let i = 0; i < routes.length; i++){
        const array = routes[i];
        for(let j = 0; j < array.length - 1; j++){
            total += graph.getEdgeWeight(array[j], array[j + 1]);
        }
        totals.push(total);
        total = 0;
    }
    return totals;
};

const kmsRoutes = calculateKm(routes);

console.log(Math.max(...kmsRoutes));