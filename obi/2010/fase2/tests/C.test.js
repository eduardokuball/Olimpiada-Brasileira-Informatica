import countSequences from '../C.js';

describe('2010 -> Fase 2 -> Tradutor alienígena', () => {

    test('Teste 1', () => {
        const n = '32';
        const sequence = '3120419';

        const result = countSequences(n, sequence);

        expect(result).toBe(4);
    });

    test('Teste 2', () => {
        const n = '32';
        const sequence = '4021333251231253';

        const result = countSequences(n, sequence);

        expect(result).toBe(0);
    });

    test('Teste 3', () => {
        const n = '500';
        const sequence = '12345';

        const result = countSequences(n, sequence);

        expect(result).toBe(13);
    });

});