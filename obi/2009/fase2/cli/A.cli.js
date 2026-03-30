import { input, output } from '../../../../utils/io.js';
import getOlympicPodium from '../A.js';

const [countries, modalities] = input()
    .split(' ')
    .map(Number);

const results = [];

for (let i = 0; i < modalities; i++) {
    const [gold, silver, bronze] = input()
        .split(' ')
        .map(Number);

    results.push([gold, silver, bronze]);
}

const result = getOlympicPodium(countries, modalities, results);

output(result);