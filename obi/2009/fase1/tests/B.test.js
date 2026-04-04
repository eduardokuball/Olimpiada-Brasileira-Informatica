import hasDuplicateLightningCoordinates from '../B.js';

describe('2009 -> Fase 1 -> Caçadores de Mitos', () => {

    test('Teste 1', () => {
        const registers = 3;
        const coordinates = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];

        const result = hasDuplicateLightningCoordinates(registers, coordinates);

        expect(result).toBe(0);
    });

    test('Teste 2', () => {
        const registers = 4;
        const coordinates = [
            [1, 2],
            [3, 4],
            [1, 2],
            [5, 6]
        ];

        const result = hasDuplicateLightningCoordinates(registers, coordinates);

        expect(result).toBe(1);
    });

    test('Teste 3', () => {
        const registers = 2;
        const coordinates = [
            [7, 8],
            [7, 8]
        ];

        const result = hasDuplicateLightningCoordinates(registers, coordinates);

        expect(result).toBe(1);
    });

});