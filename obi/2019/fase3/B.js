import Graph from '../../../utils/Graph.js';

function graphFrom(edges=[]) {
    const graph = new Graph(false);
    const vertexes = new Array(edges.length + 1)
        .fill(0).map((_, i) => i + 1);
    graph.addVertexes(...vertexes);
    edges.forEach(([a, b]) => graph.addEdge(a, b));
    return graph;
}

function trimLeaves(graph = new Graph()) {
    const toRemove = [];

    graph.graph.forEach((neighbors, node) => {
        if (neighbors.filter(n => graph.hasVertex(n)).length > 1) return;
        toRemove.push(node);
    });

    toRemove.forEach(node => graph.graph.delete(node));
    return toRemove;
}

// Main Function
export default function subway(circleEdges=[], squareEdges=[]) {
    const circle = graphFrom(circleEdges);
    const square = graphFrom(squareEdges);

    while (circle.size > 2) trimLeaves(circle);
    while (square.size > 2) trimLeaves(square);

    const circleCenter = [...circle.graph.keys()][0];
    const squareCenter = [...square.graph.keys()][0];
    
    return [circleCenter, squareCenter];
}
