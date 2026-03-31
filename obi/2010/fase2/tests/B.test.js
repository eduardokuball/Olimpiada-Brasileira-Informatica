import calculateMaxFloor from '../B.js';

describe('2010 -> Fase 2 -> Altas aventuras', () => {

    test('Teste 1', () => {
        const possibilities = 5;
        const balloon = 2;

        const result = calculateMaxFloor(possibilities, balloon);

        expect(result).toBe(3);
    });

    test('Teste 2', () => {
        const possibilities = 20;
        const balloon = 2;

        const result = calculateMaxFloor(possibilities, balloon);

        expect(result).toBe(6);
    });

    test('teste 3', () => {
        const possibilities = 11;
        const balloon = 5;

        const result = calculateMaxFloor(possibilities, balloon);

        expect(result).toBe(4);
    });

});