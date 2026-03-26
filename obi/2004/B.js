export default function calculateDiameter(points) {


    function calculateDistance(p1, p2) {
        return Math.sqrt(
            Math.pow(p2.x - p1.x, 2) + 
            Math.pow(p2.y - p1.y, 2)
        );
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

    const centralPoint = findCentralPoint(points);

    const distances = points.map(p => calculateDistance(centralPoint, p));

    const maxDistance = Math.max(...distances);

    const diameter = Math.ceil((maxDistance * 2) + 5);

    return diameter;
}