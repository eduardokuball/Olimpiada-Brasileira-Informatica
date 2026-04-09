import { input, output } from '../../../../utils/io.js';
import oddNumberObsession from '../B.js';

const [N, M] = input().split(' ', 2).map(Number);
const tray = [];
for (let i = 0; i < N; i++) {
    const row = input().split(' ', M).map(Number);
    tray.push(row);
}

const [drops, newTray] = oddNumberObsession(tray);
output(drops);
newTray.forEach(line => output(line.join(' ')));
