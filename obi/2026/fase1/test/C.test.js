import transport from '../C.js';

describe('2026 -> Fase 1 -> Transporte', () => {
    test('Teste 1', () => {
        const minutes = [5, 8, 15, 20, 21, 25, 42, 50];
        const result = transport(8, 10, minutes);
        expect(result).toBe(3);
    });

    test('Teste 2', () => {
        const minutes = [1, 11, 12];
        const result = transport(3, 10, minutes);
        expect(result).toBe(2);
    });

    test('Teste 3', () => {
        const minutes = [1, 1, 2, 3];
        const result = transport(5, 0, minutes);
        expect(result).toBe(3);
    });
});
