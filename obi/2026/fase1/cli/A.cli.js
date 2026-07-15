import { input, output } from '../../../../utils/io.js';
import fingers from '../A.js';

const fingersList = input().split(' ', 5).map(Number);
output(fingers(fingersList));
