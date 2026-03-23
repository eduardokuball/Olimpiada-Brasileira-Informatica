import Graph from '../../../utils/Graph.js';

const graph = new Graph(true);

const [cities,links] = prompt()
    .split(' ')
    .map(e => parseInt(e));

for(let i = 1; i < cities + 1; i++){
    graph.addVertexes(i);
};


for(let i = 0; i < links; i++){
    const [a, b, distance] = prompt()   
        .split(' ')
        .map(e => parseInt(e));
    graph.addEdge(a, b, distance);
};

const routes = graph.allPathsFrom(1,cities);

function CalculateShipping(routes){
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
    return Math.min(...totals);
};

const cheapestRoute = CalculateShipping(routes);

console.log(cheapestRoute);