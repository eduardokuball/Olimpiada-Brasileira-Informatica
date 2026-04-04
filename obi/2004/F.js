export default function solveFriendships(quantity, friends, requirementsData) {

    const graph = new Map();
    const inDegree = new Map();

    friends.forEach(friend => {
        graph.set(friend, []);
        inDegree.set(friend, 0);
    });

    // monta grafo CORRETAMENTE
    requirementsData.forEach(({ name, requirements }) => {

        requirements.forEach(req => {
            graph.get(req).push(name); // req → name
            inDegree.set(name, inDegree.get(name) + 1);
        });

    });

    // fila
    const queue = [];

    friends.forEach(friend => {
        if (inDegree.get(friend) === 0) {
            queue.push(friend);
        }
    });

    const result = [];

    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);

        graph.get(current).forEach(next => {
            inDegree.set(next, inDegree.get(next) - 1);

            if (inDegree.get(next) === 0) {
                queue.push(next);
            }
        });
    }

    if (result.length < quantity) {
        return 'impossivel';
    }

    return result.join(' ');
}