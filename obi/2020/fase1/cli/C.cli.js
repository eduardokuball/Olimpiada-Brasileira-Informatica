import { input, output } from '../../../../utils/io.js';
import canServeAllPeople from '../C.js';

const people = Number(input());
const shirtSizes = input().split(' ').slice(0, people).map(Number);

const requiredSmall = Number(input());
const requiredMedium = Number(input());

const result = canServeAllPeople(shirtSizes, requiredSmall, requiredMedium);

output(result);