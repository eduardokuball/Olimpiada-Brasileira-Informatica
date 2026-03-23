export default function minimumSpanningTree(tabas, edges) {

    edges = edges.map(({ tabaA, tabaB, cost }) => {
        if (tabaA > tabaB) [tabaA, tabaB] = [tabaB, tabaA];
        return { tabaA, tabaB, cost };
    });
    // Ordena as arestas por custo, depois pelos vértices
    edges.sort((a, b) => 
        a.cost - b.cost || 
        a.tabaA - b.tabaA || 
        a.tabaB - b.tabaB
    );

    const disjointSet = new Map();
    const mst = [];

    // Inicializa cada vértice como seu próprio pai
    edges.forEach(({ tabaA, tabaB }) => {
        if (!disjointSet.has(tabaA)) disjointSet.set(tabaA, tabaA);
        if (!disjointSet.has(tabaB)) disjointSet.set(tabaB, tabaB);
    });

    const find = (v) => (
        disjointSet.get(v) === v ? v : find(disjointSet.get(v))
    );

    const union = (a, b) => {
        disjointSet.set(find(a), find(b));
    };

    for (const { tabaA, tabaB } of edges) {
        if (find(tabaA) !== find(tabaB)) {
            union(tabaA, tabaB);
            mst.push([tabaA, tabaB]);
        }
    }

    // Ordena saída final
    mst.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    return mst;
}