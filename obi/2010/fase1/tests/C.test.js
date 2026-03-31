import didElevatorExceedCapacity from '../C.js';

describe('2010 -> Fase 1 -> Elevador', () => {

    test('Teste 1', () => {
        const registers = 3;
        const maximumCapacity = 10;

        const logs = [
            [0, 5],
            [2, 3],
            [3, 2]
        ];

        const result = didElevatorExceedCapacity(registers, maximumCapacity, logs);

        expect(result).toBe('N');
    });

    test('Teste 2', () => {
        const registers = 3;
        const maximumCapacity = 5;

        const logs = [
            [0, 3],
            [0, 4], 
            [2, 1]
        ];

        const result = didElevatorExceedCapacity(registers, maximumCapacity, logs);

        expect(result).toBe('S');
    });

    test('Teste 3', () => {
        const registers = 2;
        const maximumCapacity = 3;

        const logs = [
            [0, 2],
            [0, 2]
        ];

        const result = didElevatorExceedCapacity(registers, maximumCapacity, logs);

        expect(result).toBe('S');
    });

});