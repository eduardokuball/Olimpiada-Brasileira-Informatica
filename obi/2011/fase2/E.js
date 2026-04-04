import { Tree, Node } from '../../../utils/Tree.js';

const BLACK = 'P';
const WHITE = 'B';
const EMPTY = '_';

function getNextMoves(position) {
    const pieces = position.split(' ');

    if (pieces.every(e => e === EMPTY)) return []; // jogo finalizado
    if (pieces.every(e => e !== BLACK)) return null; // só peças brancas

    const moves = [];

    for (let i = 0; i < pieces.length; i++) {
        const p = pieces[i];
        if (p !== BLACK) continue;

        const newPosition = [...pieces];
        newPosition[i] = EMPTY;

        const toggle = v => v === BLACK ? WHITE : BLACK;

        if (i > 0 && newPosition[i - 1] !== EMPTY)
            newPosition[i - 1] = toggle(newPosition[i - 1]);

        if (i < pieces.length - 1 && newPosition[i + 1] !== EMPTY)
            newPosition[i + 1] = toggle(newPosition[i + 1]);

        moves.push(newPosition.join(' '));
    }

    return moves;
}

function findNodes(parent) {
    const moves = getNextMoves(parent.value);

    if (moves === null) return;

    moves.forEach(m => {
        const node = new Node(m);
        parent.addChild(node);
        findNodes(node);
    });
}

export default function getGameLeafNodes(start) {
    const tree = new Tree(start);
    findNodes(tree);
    return tree.leafs;
}