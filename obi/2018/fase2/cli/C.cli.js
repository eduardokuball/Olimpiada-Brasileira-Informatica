import { input, output } from '../../../../utils/io.js';
import sequenceSum from '../C.js';

const [ elements, lower, higher ] = input().split(' ').map(Number);
const sequence = input().split(' ', elements).map(Number);
const marks = input().split(' ', elements).map(Number);
const res = sequenceSum(lower, higher, sequence, marks);
output(res);
