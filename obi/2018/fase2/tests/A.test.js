import runAway from '../A.js';

describe('2018 -> Fase 2 -> Fuga', () => {
    test('Teste 1', () => {
        const start = [3, 7];
        const end = [5, 1];
        const result = runAway(7, 7, start, end);
        expect(result).toBe(29);
    });

    test('Teste 2', () => {
        const start = [11, 1];
        const end = [1, 11];
        const result = runAway(11, 11, start, end);
        expect(result).toBe(69); // ( ͡° ͜ʖ ͡°)
    });
});
