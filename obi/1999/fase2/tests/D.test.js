import sequenceH from "../D";

describe('1999 -> Fase 2 -> Sequências', () => {

    test('Teste 1', () => {
        const sequence = "0#";
        expect(sequenceH(sequence)).toBe("Sim");
    });

    test('Teste 2', () => {
        const sequence = "10100#";
        expect(sequenceH(sequence)).toBe("Sim");
    });

    test('Teste 3', () => {
        const sequence = "10010#";
        expect(sequenceH(sequence)).toBe("Não");
    });



});