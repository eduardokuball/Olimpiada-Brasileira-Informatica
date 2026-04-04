import calculateApproved from '../A.js';

describe('2008 -> Fase 1 -> OBI', () => {

    test('Teste 1', () => {
        const requiredNote = 100;
        const grades = [
            [50, 50],
            [100, 0],
            [49, 50]
        ];

        const result = calculateApproved(requiredNote, grades);

        expect(result).toBe(2);
    });

    test('Teste 2', () => {
        const requiredNote = 235;
        const grades = [
            [100, 134],
            [0, 0],
            [200,200],
            [150,150]
        ];

        const result = calculateApproved(requiredNote, grades);

        expect(result).toBe(2);
    });

    test('Teste 3', () => {
        const requiredNote = 10;
        const grades = [
            [3, 3],
            [4, 4]
        ];

        const result = calculateApproved(requiredNote, grades);

        expect(result).toBe(0);
    });

});