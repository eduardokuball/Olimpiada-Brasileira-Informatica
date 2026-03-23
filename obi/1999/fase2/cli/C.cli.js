import { input, output } from '../../../../utils/io.js';
import simulateGame from '../C.js';

const [quantity, favored] = input().split(' ').map(Number);

const result = simulateGame(quantity, favored);

output(`turnos: ${result.turns}`);
output(`vencedor: ${result.winner}`);