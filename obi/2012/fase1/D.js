function patrol(tree1, tree2, reach) {
    const distanceTree1 = tree1.x + tree1.y;
    const distanceTree2 = tree2.x + tree2.y;

    return Math.abs((distanceTree2 - distanceTree1)) <= reach;
}

function patrolInJungle(jungle = [], reach) {
    for (let i = 0; i < jungle.length - 1; i++) {
        if (!patrol(jungle[i], jungle[i + 1], reach)) {
            return false;
        }
    }
    return true;
}

export default function canPatrolAllTrees(jungle = [], reach) {
    const isPatroling = patrolInJungle(jungle, reach);
    return isPatroling ? "S" : "N";
}