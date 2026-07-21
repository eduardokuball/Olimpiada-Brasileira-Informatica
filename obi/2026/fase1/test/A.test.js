import fingers from '../A.js';

describe('2026 -> Fase 1 -> Dedos', () => {
    test('Teste 1', () => {
        const result = fingers([0, 0, 1, 1, 0]);
        expect(result).toBe(6);
    });

    test('Teste 2', () => {
        const result = fingers([0, 0, 0, 0, 0]);
        expect(result).toBe(0);
    });

    test('Teste 3', () => {
        const result = fingers([1, 1, 1, 1, 1]);
        expect(result).toBe(31);
    });

    test('Teste 4', () => {
        const result = fingers([1, 0, 1, 0, 1]);
        expect(result).toBe(21);
    });
});
