import Permutations from '../../../utils/Permutations.js';

function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
};

function sumAreas(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i] ** 2;
    }
    return sum;
};

const [tube, carpet] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const array = new Array(carpet * 2).fill(0).map((_, i) => i + 1);

const combinations = Permutations.fixedSizeWithRepetition(array, carpet);

const validCombinations = combinations
    .filter(combination => sumArray(combination) == tube)
    .map(combination => combination.sort((a, b) => a - b)); 

const uniqueCombinations = Array.from(new Set(validCombinations.map(JSON.stringify)))
    .map(JSON.parse);

const sumAreasCombinations = uniqueCombinations.map(combination => sumAreas(combination));

console.log(Math.max(...sumAreasCombinations));