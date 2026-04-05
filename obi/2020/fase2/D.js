export default function findMinimumNeighborhood(roadSize, distances) {

    function getNeighborhood(cityDist, i, arr) {
        const lastIndex = arr.length - 1;
        const successor = arr[i + 1];
        const predecessor = arr[i - 1];

        let totalNeighborhood = 0;

        if (i === 0) {
            totalNeighborhood += cityDist;
            totalNeighborhood += Math.abs(cityDist - successor) / 2;
        }

        if (i === lastIndex) {
            totalNeighborhood += (roadSize - cityDist);
            totalNeighborhood += Math.abs(predecessor - cityDist) / 2;
        }

        if (i > 0 && i < lastIndex) {
            totalNeighborhood += Math.abs(cityDist - successor) / 2;
            totalNeighborhood += Math.abs(predecessor - cityDist) / 2;
        }

        return totalNeighborhood;
    }

    const sortedDistances = [...distances].sort((a, b) => a - b);

    const neighborhoods = sortedDistances.map((dist, i, arr) =>
        getNeighborhood(dist, i, arr)
    );

    const minNeighborhood = Math.min(...neighborhoods);

    return Number(minNeighborhood.toFixed(2));
}