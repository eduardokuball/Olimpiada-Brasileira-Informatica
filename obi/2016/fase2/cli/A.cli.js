import { input, output } from '../../../../utils/io.js';
import calculateMaxEvolutions from '../A.js';

const candies = Number(input());
const pokemonCosts = [];

for (let i = 0; i < 3; i++) {
    pokemonCosts.push(Number(input()));
}

const result = calculateMaxEvolutions(pokemonCosts, candies);

output(result);