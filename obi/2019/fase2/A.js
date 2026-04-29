class Digraph {
    constructor() {
        this.graph = new Map();
    }

    addEdge(from, to) {
        if (!this.graph.has(to)) this.graph.set(to, []);

        if (this.graph.has(from)) {
            this.graph.get(from).push(to);
            return;
        }

        this.graph.set(from, [to]);
    }

    neighborsFrom(node) {
        return this.graph.get(node);
    }
}

function search(graph, nodes, node) {
	const ends = new Set();
	const stack = [node];

	while (stack.length > 0) {
		const curr = stack.pop();
		const adjacents = graph.neighborsFrom(curr);

		if (adjacents.length === 0) ends.add(curr);

		const best = adjacents.find(n => nodes.has(n));
		if (best) {
			stack.push(best);
			continue;
		}

		stack.push(...adjacents);
	}

	return ends.size;
}

// Main Function
export default function detetive(events, implications, nodes = []) {
    const startNodes = new Set(nodes);
    const graph = new Digraph();

    implications.forEach(([a, b]) => graph.addEdge(b, a));

    const finals = new Set();

	for (const node of nodes) {
		const nodeFinals = search(graph, startNodes, node);
        finals.add(nodeFinals);
	}

    if ([...finals].every(e => e === 1)) {
        const all = Array(events).fill(0).map((_, i) => i + 1)
        return all;
    }

	return nodes.toSorted((a, b) => a - b);
}
