import { input, output } from '../../../../utils/io.js';
import didElevatorExceedCapacity from '../C.js';

const [registers, maximumCapacity] = input()
    .split(' ')
    .map(Number);

const logs = [];

for (let i = 0; i < registers; i++) {
    const [descended, surged] = input()
        .split(' ')
        .map(Number);

    logs.push([descended, surged]);
}

const result = didElevatorExceedCapacity(registers, maximumCapacity, logs);

output(result);