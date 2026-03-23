import { input, output } from '../../../../utils/io.js';
import trainOrTruck from '../D.js';

const [kg, priceTrain, kgTrain, priceTruck, kgTruck] = input()
    .split(' ').map(e => parseFloat(e));

output(trainOrTruck(kg, priceTrain, kgTrain, priceTruck, kgTruck));
