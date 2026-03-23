import { input, output } from '../../../../utils/io.js';
import simulateGame from '../D.js';

const sequence = input();

const result = simulateGame(sequence);

output(result);
