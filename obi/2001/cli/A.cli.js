import { input, output } from '../../../utils/io.js'; 
import isInGround from '../A.js'; 

const [x1, y1, x2, y2] = input()
    .split(' ')
    .map(e => parseInt(e));

const quantity = Number(input());

const points = [];


for (let i = 0; i < quantity; i++) {
    const [x, y] = input()
    .split(' ')
    .map(Number);
    points.push([x,y])
}

const result = isInGround(points, x1,y1,x2,y2)



output(result);