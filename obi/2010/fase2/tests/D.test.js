import getMatrixValue from '../D.js';

describe('2010 -> Fase 2 -> Multiplicação de Matrizes', () => {

    test('Teste 1', () => {
        const dimensionsMatrix = 3;
        const p = 4, q = 3, r = 2, s = 3, x = 5, y = 6;
        const search = [2, 2];

        const result = getMatrixValue(
            dimensionsMatrix,
            p, q, r, s, x, y,
            search
        );

        expect(result).toBe(18);
    });

    test('Teste 2', () => {
        const dimensionsMatrix = 4;
        const p = 3, q = 5, r = 1, s = 0, x = 6, y = 7;
        const search = [4, 3];

        const result = getMatrixValue(
            dimensionsMatrix,
            p, q, r, s, x, y,
            search
        );

        expect(result).toBe(30);
    });

    test('Teste 3', () => {
        const dimensionsMatrix = 2;
        const p = 2, q = 2, r = 0, s = 1, x = 3, y = 2;
        const search = [2, 1];

        const result = getMatrixValue(
            dimensionsMatrix,
            p, q, r, s, x, y,
            search
        );

        expect(result).toBe(2);
    });

});