import { input, output } from '../../../../utils/io.js';
import macawsInCages from "../A.js";

const [macaws, cages] = input().split(" ",2).map(Number);

const result = macawsInCages(cages, macaws);

output(result);