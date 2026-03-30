import didExceedMaximumDistance from '../D.js';

describe('2009 -> Fase 1 -> Fugitivo', () => {

    test('Teste 1', () => {
        const registers = 5;
        const maximumDistance = 10;

        const movements = [
            ['N', 2],
            ['L', 3],
            ['S', 4],
            ['O', 4],
            ['O', 3]
        ];

        const result = didExceedMaximumDistance(registers, maximumDistance, movements);

        expect(result ? 1 : 0).toBe(0);
    });

    test('Teste 2', () => {
        const registers = 5;
        const maximumDistance = 10;

        const movements = [
            ['N', 6],
            ['L', 8],
            ['S', 15],
            ['O', 5],
            ['O', 4]
        ];

        const result = didExceedMaximumDistance(registers, maximumDistance, movements);

        expect(result ? 1 : 0).toBe(1);
    });

});