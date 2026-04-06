import { input, output } from '../../../../utils/io.js';
import processOperations from '../B.js';

const [elements, operationsQuantity] = input().split(' ').map(Number);

const sequence = input().split(' ').slice(0, elements).map(Number);

const operations = [];

for (let i = 0; i < operationsQuantity; i++) {
    operations.push(input().split(' ').map(Number));
}

const result = processOperations(sequence, operations);

result.forEach(r => output(r));