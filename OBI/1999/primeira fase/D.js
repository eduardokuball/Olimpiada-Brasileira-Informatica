let [kg, priceTrain, kgTrain, priceTruck, kgTruck] = prompt('kg, preço por kg trem, kg trem, preço por kg caminhão, kg caminhão').split(' ').map(parseFloat);


let totalTrain = (priceTrain + (kgTrain * kg)).toFixed(2);
let totalTruck = (priceTruck + (kgTruck * kg)).toFixed(2);

function getTransportMethod() {
    let condition = totalTrain > totalTruck
    let difference = totalTrain < totalTruck ? totalTruck - totalTrain : totalTrain - totalTruck;
    if (difference <= 1) {
        return "envie por trem \n ";
    } else if (condition) {
        return "envie por caminhão \n ";
    } else {
        return "envie por trem \n ";
    }
}

console.log(getTransportMethod());



