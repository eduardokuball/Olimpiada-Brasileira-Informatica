import { input, output } from '../../../../utils/io.js';
import getConceptFromNote from '../A.js';

const note = Number(input());

const result = getConceptFromNote(note);

output(result);