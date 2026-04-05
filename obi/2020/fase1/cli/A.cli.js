import { input, output } from '../../../../utils/io.js';
import calculateOldestAge from '../A.js';

const youngestAge = Number(input());
const myAge = Number(input());

const result = calculateOldestAge(youngestAge, myAge);

output(result);