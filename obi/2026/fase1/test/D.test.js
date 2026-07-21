import countResumes from '../D.js';

describe('2026 -> Fase 1 -> Transporte', () => {
    test('Teste 1', () => {
        const result = countResumes(71);
        expect(result).toBe(3);
    });

    test('Teste 2', () => {
        const result = countResumes(321);
        expect(result).toBe(0);
    });

    test('Teste 3', () => {
        const result = countResumes(123456789);
        expect(result).toBe(2);
    });
});
