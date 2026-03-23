// Main Function
export default function trainOrTruck(kg, priceTrain, kgTrain, priceTruck, kgTruck) {
    const totalTrain = (priceTrain + (kgTrain * kg));
    const totalTruck = (priceTruck + (kgTruck * kg));
    
    const difference = Math.abs(totalTrain - totalTruck)

    if (difference <= 1) return 'envie por trem \n ';
    if (totalTrain > totalTruck) return 'envie por caminhao \n ';
    return 'envie por trem \n ';
}
