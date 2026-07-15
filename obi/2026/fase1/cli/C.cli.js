import { input, output } from '../../../../utils/io.js';
import transport from '../C';

const [students, maxTime] = input().split(' ', 2).map(Number);
const minutes = input().split(' ', students).map(Number);
output(transport(students, maxTime, minutes));
