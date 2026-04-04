import sequenceSum from '../C.js';

describe('2018 -> Fase 2 -> Sequências', () => {
    const sequence = [9, 0, -23, -12, 7, 1, -13, 2, -1, 9, -16, -1, 14, 12];
    const marks = [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1];

    test('Teste 1', () => {
        const [lower, higher] = [3, 4];
        expect(sequenceSum(lower, higher, sequence, marks)).toBe(19);
    });

    test('Teste 2', () => {
        const [lower, higher] = [7, 20];
        expect(sequenceSum(lower, higher, sequence, marks)).toBe(-12);
    });

    test('Teste 3', () => {
        const [lower, higher] = [5, 5];
        expect(sequenceSum(lower, higher, sequence, marks)).toBe(14);
    });

    test('Teste 4', () => {
        const [lower, higher] = [0, 20];
        expect(sequenceSum(lower, higher, sequence, marks)).toBe(26);
    });
});
