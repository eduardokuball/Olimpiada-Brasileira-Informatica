import { input, output } from '../../../utils/io.js';
import canDivideEqually from '../B.js';

const [jhon, josef, objects] = input().split(' ').map(Number);

const objectsValues = [];

for (let i = 0; i < objects; i++) {
    objectsValues.push(Number(input()));
}

const result = canDivideEqually(objectsValues);

output(result);