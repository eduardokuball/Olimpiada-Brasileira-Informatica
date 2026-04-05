import { input, output } from '../../../../utils/io.js';
import juneCelebration from '../A.js';

const school = parseInt(input());
const supermarket = parseInt(input());
const littleshop = parseInt(input());
output(juneCelebration(school, supermarket, littleshop));
