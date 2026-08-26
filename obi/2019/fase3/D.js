export default function computer(N, instructions = []) {
    const memory = new Array(N).fill(0);
    const responses = [];

    instructions.forEach(instruction => {
        const [command, POSITION, V] = instruction;
        const INDEX = POSITION - 1;

        if (command === 1) {
            let increment = 0;

            while (true) {
                const value = V - increment;
                if (value <= 0) break;
                if (INDEX + increment >= N) break;

                memory[INDEX + increment] += value                
                increment++;
            }
        }

        if (command === 2) {
            let increment = 0;

            while (true) {
                const value = V - increment;
                if (value <= 0) break;
                if (INDEX - increment <= 0) break;

                memory[INDEX - increment] += value                
                increment++;
            }
        }

        if (command === 3) responses.push(memory[INDEX]);
    });

    return responses;
}
