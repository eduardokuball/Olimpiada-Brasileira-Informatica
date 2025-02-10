function median(arr = []) {
    arr.sort((a, b) => a - b);

    const center = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        const average = (arr[center - 1] + arr[center]) / 2
        return average;
    }
    
    return arr[center];
}

const storesQuantity = parseInt(prompt());
const stores = [];

for (let i = 0; i < storesQuantity; i++) {
    const [x, y] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e));

    stores.push({ x, y });
}

const xCoords = stores.map(store => store.x);
const yCoords = stores.map(store => store.y);

const medianX = median(xCoords);
const medianY = median(yCoords);

console.log(`${medianX} ${medianY}`);
