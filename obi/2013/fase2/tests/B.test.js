import grandmaScarves from '../B.js';

describe('2013 -> Fase 2 -> Cachecol da Vovó Vitória', () => {
    test('Teste 1', () => {
        expect(grandmaScarves(1)).toBe(12);
    });

    test('Teste 2', () => {
        expect(grandmaScarves(2)).toBe(54);
    });

    test('Teste 3', () => {
        expect(grandmaScarves(4)).toBe(1122);
    });
});
