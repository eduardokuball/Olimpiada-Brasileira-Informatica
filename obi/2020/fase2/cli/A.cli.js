import { input, output } from '../../../../utils/io.js';
import countSlips from '../A.js';

const [roomsQuant, tunnelsQuant, currentRoom] = input().split(' ').map(Number);

const heights = input().split(' ').map(Number);

const tunnels = [];

for (let i = 0; i < tunnelsQuant; i++) {
    const [start, end] = input().split(' ').map(Number);
    tunnels.push({ start, end });
}

const result = countSlips(heights, tunnels, currentRoom);

output(result);