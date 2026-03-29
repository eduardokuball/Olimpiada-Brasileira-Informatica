import countPanels from '../A.js';

describe('2007 -> Fase 1 -> painéis', () => {

    test('Teste 1', () => {
        const relatory = ['P', 'A', 'D'];

        const result = countPanels(relatory);

        expect(result).toBe(3); 
    });

    test('Teste 2', () => {
        const relatory = ['C', 'C', 'A'];

        const result = countPanels(relatory);

        expect(result).toBe(5); 
    });

    test('Teste 3', () => {
        const relatory = ['D', 'D'];

        const result = countPanels(relatory);

        expect(result).toBe(0);
    });

});