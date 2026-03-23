function hasLightningInSamePlace(registers) {
    const coordinates = [];

    for (let i = 0; i < registers; i++) {
        const [x, y] = prompt()
            .split(' ')
            .map(Number);

        const newCoordinate = { x, y };

        const exists = coordinates.some(existingCoordinate =>
            Object.keys(newCoordinate).every(key => newCoordinate[key] === existingCoordinate[key])
        );

        if (exists) {
            return true; 
        } else {
            coordinates.push(newCoordinate);
        }
    }

    return false;
}

const registers = Number(prompt());

const lightningSamePlace = hasLightningInSamePlace(registers);

console.log(lightningSamePlace ? 1 : 0);
