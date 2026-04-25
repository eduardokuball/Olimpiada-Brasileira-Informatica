import { input, output } from '../../../../utils/io.js';
import constructionCompany from '../B.js';

const N = parseInt(input());
const heights = input().split(' ', N).map(Number);
output(constructionCompany(heights));
