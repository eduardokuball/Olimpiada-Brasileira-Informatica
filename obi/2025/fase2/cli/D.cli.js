import { input, output } from '../../../../utils/io.js';
import craftFair from '../D.js';

const [N, T] = input().split(' ', 2).map(Number);
const types = input().split(' ', N).map(Number);
const prices = input().split(' ', N).map(Number);
const C = parseInt(input());
const clients = input().split(' ', C).map(Number);
output(craftFair(types, prices, clients));
