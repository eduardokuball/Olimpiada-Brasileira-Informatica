import getConceptFromNote from '../A.js';

describe('2009 -> Fase 1 -> Notas da Prova', () => {

    test('Teste 1', () => {
        const result = getConceptFromNote(0);
        expect(result).toBe('E');
    });

    test('Teste 2', () => {
        const result = getConceptFromNote(20);
        expect(result).toBe('D');
    });

    test('Teste 3', () => {
        const result = getConceptFromNote(50);
        expect(result).toBe('C');
    });

    test('Teste 4', () => {
        const result = getConceptFromNote(70);
        expect(result).toBe('B');
    });

    test('Teste 5', () => {
        const result = getConceptFromNote(90);
        expect(result).toBe('A');
    });

});