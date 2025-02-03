function calculateDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function findCentralPoint(points) {
    let bestPoint = null;
    let smallestSumOfDistances = Infinity;

    for (let i = 0; i < points.length; i++) {
        let sumOfDistances = 0;

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                sumOfDistances += calculateDistance(points[i], points[j]);
            }
        }

        if (sumOfDistances < smallestSumOfDistances) {
            smallestSumOfDistances = sumOfDistances;
            bestPoint = points[i];
        }
    }

    return bestPoint;
}

const quantity = parseInt(prompt());
let points = [];

for (let i = 0; i < quantity; i++) {
    const [ x,y ] = prompt()
        .split(' ')
        .map(e => parseInt(e));
    points.push({ x, y });
};

const centralPoint = findCentralPoint(points);

const distances = [];
points.forEach(p1 => {
        distances.push(calculateDistance(centralPoint, p1));
});

const diameter = Math.floor((Math.max(...distances) * 2) + 5) || Math.ceil((Math.max(...distances) * 2) + 5);

console.log(diameter);
