import pushStock from '../A.js';

describe('2007 -> Fase 1 -> Chocolate', () => {

    test('Teste 1', () => {
        const divisions = [2, 3, 5];
        const result = pushStock(divisions);

        expect(result).toBe(7);
    });

    test('Teste 2', () => {
        const divisions = [2,2,2,3,3];
        const result = pushStock(divisions);

        expect(result).toBe(7);
    });

    test('Teste 3', () => {
        const divisions = [2,3,4,5,6,7,8];
        const result = pushStock(divisions);

        expect(result).toBe(28);
    });

});