import { input, output } from '../../../../utils/io.js';
import photos from '../A.js';

const N = parseInt(input());
const pictures = input().split(' ', N).map(Number);

output(photos(pictures));
