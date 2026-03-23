import genome from '../A.js';

describe('1999 -> Fase 1 -> Projeto Genoma', () => {
    test('Teste 1: AC TGGT', () => {
        const common = [];
        const inverted = [3];
        expect(genome('AC', 'TGGT')).toEqual([common, inverted]);
    });

    test('Teste 2: CATA TCATATGCAAATAGCTGCATACCGA', () => {
        const common = [2, 18];
        const inverted = [4];
        expect(genome('CATA', 'TCATATGCAAATAGCTGCATACCGA')).toEqual([common, inverted]);
    });
});
