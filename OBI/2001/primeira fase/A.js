function isInGround(x,y){
    if (x >= x1 && x <= x2 && y >= y2 && y <= y1) meteorsOnTheGround++;
};

let [x1, y1, x2, y2] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const quantity = Number(prompt());
let meteorsOnTheGround = 0;

if (x1 > x2) [x1, x2] = [x2, x1];
if (y1 < y2) [y1, y2] = [y2, y1];

for (let i = 0; i < quantity; i++) {
    const [x, y] = prompt()
    .split(' ')
    .map(Number);

    isInGround(x,y);
}



console.log(meteorsOnTheGround);