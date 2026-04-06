export default function calculateFuelToBuy(consumptionKmPerLiter, distanceKm, currentFuel) {
    const totalNeeded = distanceKm / consumptionKmPerLiter;
    const fuelToBuy = totalNeeded - currentFuel;

    const result = fuelToBuy < 0 ? 0 : fuelToBuy;

    return Number(result.toFixed(1));
}
