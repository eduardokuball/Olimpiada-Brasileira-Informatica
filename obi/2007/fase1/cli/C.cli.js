import { input, output } from '../../../../utils/io.js';
import solve from '../C.js';

const cities = Number(input());
const money = Number(input());

const cityData = [];

for (let i = 0; i < cities; i++) {
    const e = input().split(' ');

    const id = Number(e[0]);
    const value = Number(e[1]);
    const sig = e[2];
    const nv = Number(e[3]);

    const neighbors = [];

    for (let j = 0; j < nv; j++) {
        neighbors.push(Number(e[4 + j]));
    }

    cityData.push({ id, value, sig, neighbors });
}

const result = solve(cities, money, cityData);

output(result);