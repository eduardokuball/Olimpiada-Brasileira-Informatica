import findSeat from '../C.js';

describe('2008 -> Fase 1 -> Avião', () => {

    test('Teste 1', () => {
        const rows = 5;
        const columns = 5;
        const firstClass = 2;
        const position = 12;

        const result = findSeat(rows, columns, firstClass, position);

        expect(result).toBe('4 B');
    });

    test('Teste 2', () => {
        const rows = 50;
        const columns = 12;
        const firstClass = 13;
        const position = 185;

        const result = findSeat(rows, columns, firstClass, position);

        expect(result).toBe('28 E');
    });

    test('Teste 3', () => {
        const rows = 12;
        const columns = 10;
        const firstClass = 6;
        const position = 100;

        const result = findSeat(rows, columns, firstClass, position);

        expect(result).toBe('PROXIMO VOO');
    });

});