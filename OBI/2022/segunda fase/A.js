function calculateRequiredFuel(consumptionKmPL, localDistanceKm, remainingFuelL) {
    const totalRequiredFuel = localDistanceKm / consumptionKmPL;
    const requiredFuel = totalRequiredFuel - remainingFuelL;

    return requiredFuel < 0 ? 0 : requiredFuel;
}

const consumptionKmPL = parseInt(prompt());
const localDistanceKm = parseInt(prompt());
const remainingFuelL = parseInt(prompt());


const requiredFuel = calculateRequiredFuel(consumptionKmPL, localDistanceKm, remainingFuelL);

console.log(requiredFuel.toFixed(1));