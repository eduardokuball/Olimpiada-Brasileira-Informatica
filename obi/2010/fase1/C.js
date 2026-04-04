export default function didElevatorExceedCapacity(registers, maximumCapacity, logs) {
    let exceeded = false;
    let persons = 0;

    for (let i = 0; i < registers; i++) {
        const [descended, surged] = logs[i];

        persons -= descended;
        persons += surged;

        if (persons > maximumCapacity) {
            exceeded = true;
        }
    }

    return exceeded ? 'S' : 'N';
}