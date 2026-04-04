import { input, output } from '../../../../utils/io.js';
import solve from '../B.js';

const [xi, yi, xf, yf] = input().split(' ').map(Number);

const areas = Number(input());

const areasData = [];

for (let i = 0; i < areas; i++) {
    areasData.push(
        input().split(' ').map(Number)
    );
}

const result = solve(xi, yi, xf, yf, areasData);

output(result);