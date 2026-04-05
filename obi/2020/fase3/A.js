export default function findRectangleDimensions(blueSquares, whiteSquares) {

    function getDivisors(number) {
        const divisors = [];

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) divisors.push(i);
        }

        return divisors;
    }

    function getRectanglesByArea(area) {
        const divisors = getDivisors(area);
        const rectangles = [];

        const half = Math.ceil(divisors.length / 2); 

        for (let i = 0; i < divisors.length; i++) {
            const a = divisors[i];
            const b = divisors[divisors.length - 1 - i];

            rectangles.push([a, b]);

            if (i + 1 >= half) break;
        }

        return rectangles;
    }

    const totalArea = blueSquares + whiteSquares;

    const rectangles = getRectanglesByArea(totalArea)
        .filter(([a, b]) => (a - 2) * (b - 2) === whiteSquares);

    if (rectangles.length === 0) return [-1, -1];

    return rectangles[0];
}