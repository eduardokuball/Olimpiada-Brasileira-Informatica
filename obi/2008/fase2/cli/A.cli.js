import { input, output } from '../../../../utils/io.js';
import countPanels from '../A.js';

const commands = Number(input());

const relatory = input()
    .split('')
    .slice(0, commands)
    .map(e => e.toUpperCase());

const result = countPanels(relatory);

output(result);