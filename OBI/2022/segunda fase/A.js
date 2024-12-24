const consumptionKmPL = parseInt(prompt('Digite a quantidade de km/l'));
const localDistanceKm = parseInt(prompt('Digite a distância'));
const remainingFuelL = parseInt(prompt('Digite os litros de gasolina restantes'));

function calculateRequiredFuel(consumptionKmPL, localDistanceKm, remainingFuelL) {
    const totalRequiredFuel = localDistanceKm / consumptionKmPL;
    const requiredFuel = totalRequiredFuel - remainingFuelL;

    return requiredFuel < 0 ? 0 : requiredFuel;
}

const requiredFuel = calculateRequiredFuel(consumptionKmPL, localDistanceKm, remainingFuelL);

console.log(requiredFuel.toFixed(1));