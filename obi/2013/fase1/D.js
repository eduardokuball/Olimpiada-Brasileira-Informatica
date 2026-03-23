import Permutations from '../../../utils/Permutations.js';

const [ buildings, sale] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const buildingsArr = prompt()
    .split(' ',buildings)
    .map(e => parseInt(e));

const size = buildings - sale;

let combinations = Permutations.fixedSizeWithoutRepetition(buildingsArr,size);

combinations = combinations.map((c) => c.sort((a,b) => a - b));

const distances = combinations.map((c) => Math.abs(c[0] - c[c.length - 1]));

console.log(Math.min(...distances));