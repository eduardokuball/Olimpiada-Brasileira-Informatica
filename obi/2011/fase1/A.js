export default function countCoveredArea(fishingNet, rectangles) {

    const maxSize = 101;

    const sea = Array.from({ length: maxSize }, () =>
        Array(maxSize).fill(false)
    );

    for (let i = 0; i < fishingNet; i++) {
        const [xi, xf, yi, yf] = rectangles[i];

        for (let x = xi; x < xf; x++) {
            for (let y = yi; y < yf; y++) {
                sea[x][y] = true;
            }
        }
    }

    let count = 0;

    for (let x = 0; x < maxSize; x++) {
        for (let y = 0; y < maxSize; y++) {
            if (sea[x][y]) {
                count++;
            }
        }
    }

    return count;
}