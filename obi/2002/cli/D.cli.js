import { input, output } from '../../../utils/io.js';
import mostVisitedAirports from '../D.js';

const [airports, flights] = input().split(' ').map(Number);

const connections = [];

for (let i = 0; i < flights; i++) {
    const [a, b] = input().split(' ').map(Number);
    connections.push(a);
    connections.push(b);
}

const result = mostVisitedAirports(connections);

output(result);