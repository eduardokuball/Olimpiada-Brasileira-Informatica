export default function countDifferentFamilies(n, relations = []) {
    const parent = Array.from({ length: n + 1 }, (_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); 
        }
        return parent[x];
    }

    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);

        if (rootA !== rootB) {
            parent[rootA] = rootB;
        }
    }

    for (const [a, b] of relations) {
        union(a, b);
    }

    const families = new Set();

    for (let i = 1; i <= n; i++) {
        families.add(find(i));
    }

    return families.size;
}