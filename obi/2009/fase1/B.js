export default function hasDuplicateLightningCoordinates(registers, coordinatesInput) {
    const coordinates = [];

    for (let i = 0; i < registers; i++) {
        const [x, y] = coordinatesInput[i];

        const newCoordinate = { x, y };

        const exists = coordinates.some(existingCoordinate =>
            Object.keys(newCoordinate).every(key => newCoordinate[key] === existingCoordinate[key])
        );

        if (exists) {
            return 1;
        } else {
            coordinates.push(newCoordinate);
        }
    }

    return 0;
}