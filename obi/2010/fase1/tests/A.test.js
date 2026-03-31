import getNextHalleyYear from '../A.js';

describe('2010 -> Fase 2 -> Cometa', () => {

    test('Teste 1', () => {
        const year = 2010;

        const result = getNextHalleyYear(year);

        expect(result).toBe(2062);
    });

    test('Teste 2', () => {
        const year = 10000;

        const result = getNextHalleyYear(year);

        expect(result).toBe(10042);
    });

    test('Teste 3', () => {
        const year = 2062;

        const result = getNextHalleyYear(year);

        expect(result).toBe(2138);
    });

    test('Teste 4', () => {
        const year = 2061;

        const result = getNextHalleyYear(year);

        expect(result).toBe(2062);
    });

});