function processElevatorUsage(registers, maximumCapacity) {
    let exceeded = false;
    let persons = 0;

    for (let i = 0; i < registers; i++) {
        const [descended, surged] = prompt()
            .split(' ')
            .map(Number);
        
        persons -= descended; 
        persons += surged;     
        
        if (persons > maximumCapacity) {  
            exceeded = true;
        }
    }

    return exceeded;
}

const [registers, maximumCapacity] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const exceeded = processElevatorUsage(registers, maximumCapacity);

console.log(exceeded ? 'S' : 'N');
