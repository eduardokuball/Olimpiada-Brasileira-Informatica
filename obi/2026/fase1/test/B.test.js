import chips from '../B.js';

describe('2026 -> Fase 1 -> Fichas', () => {
    test('Teste 1', () => {
        const result = chips(8);
        expect(result).toBe(3);
    });

    test('Teste 2', () => {
        const result = chips(75);
        expect(result).toBe(8);
    });

    test('Teste 3', () => {
        const result = chips(199);
        expect(result).toBe(22);
    });
});
