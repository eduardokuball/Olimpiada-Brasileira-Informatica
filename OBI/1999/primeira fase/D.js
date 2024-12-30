function getTransportMethod(totalTrain,totalTruck) {
    const condition = totalTrain > totalTruck;
    const difference = totalTrain < totalTruck ? totalTruck - totalTrain : totalTrain - totalTruck;
    if (difference <= 1) {
        return "envie por trem \n ";
    } else if (condition) {
        return "envie por caminhão \n ";
    } else {
        return "envie por trem \n ";
    }
}

const [kg, priceTrain, kgTrain, priceTruck, kgTruck] = prompt()
    .split(' ')
    .map(e => parseFloat(e));

const totalTrain = (priceTrain + (kgTrain * kg)).toFixed(2);
const totalTruck = (priceTruck + (kgTruck * kg)).toFixed(2);

console.log(getTransportMethod(totalTrain,totalTruck));