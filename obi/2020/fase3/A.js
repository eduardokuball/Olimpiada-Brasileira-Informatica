function getDivisors(number) {
    const divisors = [];

    for (let i = 1; i <= number; i++)
        if (number % i === 0) divisors.push(i);

    return divisors;
}

function getSquaresByArea(area) {
    const divisors = getDivisors(area);
    const squares = [];

    const divisorsHalf = divisors.length / 2;
    
    // No for...in, a key é uma string
    for (let key in divisors) {
        const i = parseInt(key);
        const inverseIndex = -i - 1;

        const square = [
            divisors.at(i),
            divisors.at(inverseIndex)
        ];

        squares.push(square);

        if (i+1 >= divisorsHalf) break;
    }

    return squares;
}

const blueSquares = parseInt(prompt());
const whiteSquares = parseInt(prompt());

const totalArea = blueSquares + whiteSquares;

const squares = getSquaresByArea(totalArea)
    .filter(([a, b]) => (a-2) * (b-2) === whiteSquares);

if (squares.length === 0) squares.push([-1, -1]);

const [ square ] = squares;
console.log(square.join(' '));
