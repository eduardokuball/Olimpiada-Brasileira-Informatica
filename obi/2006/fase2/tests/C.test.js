import minMissingSubsequenceLength from '../C.js';

describe('2006 -> Fase 2 -> Sub-sequências', () => {

    test('Teste 1', () => {
        const s1 = 'ababaa';
        const s2 = 'abbaa';

        const result = minMissingSubsequenceLength(s1, s2);

        expect(result).toBe(3);
    });

    test('Teste 2', () => {
        const s1 = 'babab';
        const s2 = 'babba';

        const result = minMissingSubsequenceLength(s1, s2);

        expect(result).toBe(3);
    });

    test('Teste 3', () => {
        const s1 = 'banana';
        const s2 = 'anbnaanbaan';

        const result = minMissingSubsequenceLength(s1, s2);

        expect(result).toBe(5);
    });



});