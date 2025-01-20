import Graph from "../../../utils/graph.js";

const graph = new Graph(true);

const [pillars,bridges] = prompt()
    .split(' ')
    .map(e => parseInt(e));

for(let i = 0; i < pillars + 2; i++){
    graph.addVertexes(String(i));
};


for(let i = 0; i < bridges; i++){
    const [a, b, distance] = prompt()   
        .split(' ')
        .map(e => parseInt(e));
    graph.addEdge(String(a), String(b), distance);
};

const routes = graph.allPathsFrom(String(0),String(pillars + 1));

function calculateHoles(routes){
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

const fewerHoles = calculateHoles(routes);

console.log(fewerHoles);