import { input, output } from '../../../../utils/io.js';
import calculateMoves from '../A.js';

const positions = Number(input());
const flyingSaucer = Number(input());
const airplane = Number(input());

const result = calculateMoves(positions, flyingSaucer, airplane);

output(result);