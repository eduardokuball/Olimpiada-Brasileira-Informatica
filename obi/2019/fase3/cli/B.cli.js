import { input, output } from '../../../../utils/io.js';
import subway from '../B.js';

const [N, M] = input().split(' ', 2).map(Number);

const circleEdges = [];
for (let i = 0; i < N - 1; i ++) {
    const edge = input().split(' ', 2).map(Number);
    circleEdges.push(edge);
}

const squareEdges = [];
for (let i = 0; i < M - 1; i ++) {
    const edge = input().split(' ', 2).map(Number);
    squareEdges.push(edge);
}

output(subway(circleEdges, squareEdges).join(' '));
