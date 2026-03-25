export default function findMedianPoint(stores) {


    function median(arr = []) {
        arr.sort((a, b) => a - b);

        const center = Math.floor(arr.length / 2);

        if (arr.length % 2 === 0) {
            return (arr[center - 1] + arr[center]) / 2;
        }

        return arr[center];
    }

    const xCoords = stores.map(store => store.x);
    const yCoords = stores.map(store => store.y);

    const medianX = median(xCoords);
    const medianY = median(yCoords);

    return `${Math.trunc(medianX)} ${Math.trunc(medianY)}`;
}