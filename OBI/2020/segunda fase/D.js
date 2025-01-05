function getDistances() {
    const distances = []
    
    for (let i = 1; i <= cities; i++) {
        const cityDistance = parseInt(prompt());
        distances.push(cityDistance);
    }
    
    distances.sort((a, b) => a - b);
    return distances;
}

function getNeighborhood(cityDist, i, arr) {
    const lastIndex = arr.length - 1;
    const sucessor = arr[i + 1];
    const predecessor = arr[i - 1];

    let totalNeighborhood = 0;

    if (i === 0) {
        // Se ele está no primeiro índice, ele só tem sucessor
        totalNeighborhood += cityDist;
        totalNeighborhood += Math.abs(cityDist - sucessor) / 2;
    }
    if (i === lastIndex) {
        // Se ele está no último índice, ele só tem predecessor
        totalNeighborhood += (roadSize - cityDist);
        totalNeighborhood += Math.abs(predecessor - cityDist) / 2;
    }

    if (i > 0 && i < lastIndex) {
        // Se ele está no meio, ele tem sucessor E antecessor
        totalNeighborhood += Math.abs(cityDist - sucessor) / 2;
        totalNeighborhood += Math.abs(predecessor - cityDist) / 2;
    }

    return totalNeighborhood;
}

const roadSize = parseInt(prompt());
const cities = parseInt(prompt());

const distances = getDistances();
const neighborhoods = distances.map((dist, i, arr) => getNeighborhood(dist, i, arr));

const lessNeighborhood = Math.min(...neighborhoods);
console.log(lessNeighborhood.toFixed(2));
