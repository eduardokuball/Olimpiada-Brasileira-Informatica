class Graph {
    constructor(weighted = false) {
        this.weighted = weighted;
        this.graph = new Map();
    }
    
    // Gerar grafo:
    addVertexes(...vertexes) {
        vertexes.forEach(vertex => {
            if (!this.graph.has(vertex)) this.graph.set(vertex, []);
        });
    }
    
    addEdge(vertexA, vertexB, weight=null) {
        if (this.weighted && !weight) {
            console.error('weight is not defined');
            throw new Error('weight is not defined');
        }
        if (!this.graph.has(vertexA)) {
            console.error('vertexA is not defined');
            throw new Error('vertexA is not defined');
        }
        if (!this.graph.has(vertexB)) {
            console.error('vertexB is not defined');
            throw new Error('vertexB is not defined');
        }
      
        const edgesA = this.graph.get(vertexA);
        const edgesB = this.graph.get(vertexB);
        const edgeA = this.weighted ? { vertex: vertexB, weight } : vertexB;
        const edgeB = this.weighted ? { vertex: vertexA, weight } : vertexA;
        
        // Adiciona uma nova aresta aos vértices
        const hasEdgeA = edgesA
            .some(e => this.weighted ? e.vertex === edgeA.vertex : e === edgeA);
        
        if (!hasEdgeA) {
            edgesA.push(edgeA);
            this.graph.set(vertexA, edgesA);
        }

        const hasEdgeB = edgesB
            .some(e => this.weighted ? e.vertex === edgeB.vertex : e === edgeB);

        if (!hasEdgeB) {
            edgesB.push(edgeB);
            this.graph.set(vertexB, edgesB);
        }
    }
    
    removeEdge(vertexA, vertexB) {
        if (!this.hasEdge(vertexA, vertexB)) {
            console.error('edge not exists');
            throw new Error('edge not exists');
        }

        // Removendo de A para B
        const removedEdgesFromA = this.graph.get(vertexA)
            .filter(e => 
                this.weighted ? e.vertex !== vertexB : e !== vertexB
            );

        this.graph.set(vertexA, removedEdgesFromA);

        // Removendo de B para A
        const removedEdgesFromB = this.graph.get(vertexB)
            .filter(e =>
                this.weighted ? e.vertex !== vertexA : e !== vertexA
            );

        this.graph.set(vertexB, removedEdgesFromB);
    }

    // Pegar informações do grafo:
    hasVertex(vertex) {
        return this.graph.has(vertex);
    }
    
    hasEdge(vertexA, vertexB) {
        if (!this.hasVertex(vertexA)) {
            console.error(`${vertexA} not exists`);
            throw new Error(`${vertexA} not exists`);
        }
        if (!this.hasVertex(vertexB)) {
            console.error(`${vertexB} not exists`);
            throw new Error(`${vertexB} not exists`);
        }
        
        const edgesA = this.getVertexEdges(vertexA);
        
        if (this.weighted)
            return edgesA.some(e => e.vertex === vertexB);

        return edgesA.includes(vertexB);
    }
    
    getEdgeWeight(vertexA, vertexB) {
        if (!this.weighted) {
            console.error('graph is not weighted');
            throw new Error('graph is not weighted');
        }
        if (!this.hasEdge(vertexA, vertexB)) {
            console.error('edge not exists');
            throw new Error('edge not exists');
        }
        
        const edgesA = this.getVertexEdges(vertexA);
        const { weight } = edgesA.find(e => e.vertex === vertexB);
        
        return weight;
    }
    
    getVertexEdges(vertex, ignoreWeight=false) {
        if (!this.graph.has(vertex)) {
            console.error(`vertex ${vertex} not exists`);
            throw new Error(`vertex ${vertex} not exists`);
        }

        if (this.weighted && ignoreWeight) {
            return this.graph.get(vertex)
                .map(edge => edge?.vertex || edge);
        }

        return this.graph.get(vertex);
    }

    allPathsThatStartWith(start, visited = new Set(), path = []) {
        if (!this.hasVertex(start)) {
            console.error(`${start} not exists`);
            throw new Error(`${start} not exists`);
        }
    
        let allPaths = [];
        path.push(start); // Adiciona o ponto atual ao caminho
        visited.add(start); // Marca o ponto como visitado
    
        const neighbors = this.getVertexEdges(start, true);
        let isDeadEnd = true; // Marca se chegamos ao fim de um ramo
    
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                // Continua explorando apenas se o vizinho ainda não foi visitado
                isDeadEnd = false;
                const subPaths = this.allPathsThatStartWith(neighbor, new Set(visited), [...path]);
                allPaths = allPaths.concat(subPaths);
            }
        }
    
        if (isDeadEnd) {
            // Se não há mais vizinhos, adiciona o caminho completo
            allPaths.push([...path]);
        }
    
        path.pop(); // Remove o ponto atual (backtracking)
        visited.delete(start); // Desmarca o ponto atual (backtracking)
    
        return allPaths;
    }
    
    allCyclesFrom(start) {
        if (!this.hasVertex(start)) {
            console.error(`${start} not exists`);
            throw new Error(`${start} not exists`);
        }
    
        const allPaths = this.allPathsThatStartWith(start);
        let allCycles = [];
    
        for (let path of allPaths) {
            const lastVertex = path[path.length - 1];
            if (lastVertex !== start) {
                const allCyclePaths = this.allPathsFrom(lastVertex, start); 

                if (allCyclePaths.length <= 0) continue;

                const smallestCycle = allCyclePaths.reduce((smallest, e) =>
                    e.length < smallest.length ? e : smallest, allCyclePaths[0]);

                allCycles.push([...path, ...smallestCycle.slice(1)]);
                continue;
            }
            
            if (path.length <= 2) continue;
            allCycles.push(path);
        }
    
        return allCycles.toSorted();
    }
    
    allPathsFrom(start, end, visited = new Set(), path=[]) {
        if (!this.hasVertex(start)) {
            console.error(`${start} not exists`);
            throw new Error(`${start} not exists`);
        }
        if (!this.hasVertex(end)) {
            console.error(`${end} not exists`);
            throw new Error(`${end} not exists`);
        }

        if (visited.has(start)) return [];
        if (start === end) return [path.concat(start)];
    
        visited.add(start);
        path.push(start);
    
        let allPaths = [];
    
        const neighbors = this.getVertexEdges(start, true);
        for (let neighbor of neighbors) {
            const pathForks = this.allPathsFrom(neighbor, end, new Set(visited), [...path]);
            allPaths = allPaths.concat(pathForks);
        }
    
        return allPaths.toSorted();
    }

    showGraph() {
        const links = [];
        
        for (let [vertex, edges] of this.graph) {
            edges.forEach(edge => {
                const [first, last] = [vertex, this.weighted ? edge.vertex : edge].toSorted();
                
                const link = this.weighted
                    ? `${first} <-${edge.weight}-> ${last}`
                    : `${first} <-> ${last}`;

                links.push(link);
            });
        }

        links.sort();
        const filteredLinks = links.filter((e, i) => links.indexOf(e) === i);
        filteredLinks.forEach(link => console.log(link));
    }
}

export default Graph;

// const meuGrafo = new Graph(true); // Cria um grafo ponderado (true)
// meuGrafo.addVertexes('A', 'B', 'C', 'D');  // Adiciona os pontos A, B, C e D
// // Cria Ligações, cada uma com seus pontos e pesos
// meuGrafo.addEdge('A', 'B', 10);
// meuGrafo.addEdge('B', 'C', 20);
// meuGrafo.addEdge('C', 'D', 30);
// meuGrafo.addEdge('D', 'A', 40);

// Pegar todas as ligações de um ponto:
  // console.log(meuGrafo.getVertexEdges('A'));
// Pegar o peso de uma ligação:
  // console.log(meuGrafo.getEdgeWeight('A', 'B'));
// Descobrir se o ponto existe:
  // console.log(meuGrafo.hasVertex('A'));
  // console.log(meuGrafo.hasVertex('V'));
// Descobrir se a ligação existe:
  // console.log(meuGrafo.hasEdge('A', 'B'));
  // console.log(meuGrafo.hasEdge('A', 'C'));
// meuGrafo.showGraph(); // Exibir uma visualização do grafo.