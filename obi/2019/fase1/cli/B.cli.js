import { input, output } from '../../../../utils/io.js';
import findEldestSonAge from '../B.js';

const ageMonic = Number(input());
const ageFirstSon = Number(input());
const ageSecondSon = Number(input());

const result = findEldestSonAge(ageMonic, ageFirstSon, ageSecondSon);

output(result);