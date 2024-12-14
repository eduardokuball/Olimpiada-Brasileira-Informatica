let consumptionKmPL = parseInt(prompt('Digite a quantidade de km/l'));
let localDistanceKm = parseInt(prompt('Digite a distância'));
let remainingFuelL = parseInt(prompt('Digite os litros de gasolina restantes'));

function calculateRequiredFuel(consumptionKmPL, localDistanceKm, remainingFuelL) {
    let totalRequiredFuel = localDistanceKm / consumptionKmPL;
    let requiredFuel = totalRequiredFuel - remainingFuelL;

    return requiredFuel < 0 ? 0 : requiredFuel;
};

let requiredFuel = calculateRequiredFuel(consumptionKmPL, localDistanceKm, remainingFuelL);

console.log(requiredFuel.toFixed(1));