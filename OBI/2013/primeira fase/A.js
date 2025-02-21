const [aX, aY, bX, bY, x, y] = prompt()
    .split(' ', 6)
    .map(e => parseInt(e));

const patternsWithCut = [
    {
        height: Math.min(aX, bX),
        width: aY + bY,
    },
    {
        height: aY + bY,
        width:  Math.min(aX, bX),
    },
    {
        height: Math.min(aX, bY),
        width: aY + bX,
    },
    {
        height: aY + bX,
        width: Math.min(aX, bY),
    },
    {
        height: Math.min(aY, bX),
        width: aX + bY,
    },
    {
        height: aX + bY,
        width: Math.min(aY, bX),
    },
    {
        height: Math.min(aY, bY),
        width: aX + bX,
    },
    {
        height: aX + bX,
        width: Math.min(aY, bY),
    },
];

const validPatterns = patternsWithCut.filter(pattern => pattern.width >= y && pattern.height >= x);

const verify = (bX >= x && bY >= y) || (bY >= x && bX >= y);

if(validPatterns.length > 0 || verify){
    console.log('S');
} else {
    console.log('N');
}