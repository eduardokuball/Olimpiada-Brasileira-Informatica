import canPassThroughDoor from '../A.js';

describe("2012 -> Fase 1 -> Colchão", () => {

    test("Teste 1", () => {
        const result = canPassThroughDoor(25, 120, 220, 200, 100);
        expect(result).toBe('S');
    });

    test("Teste 2", () => {
        const result = canPassThroughDoor(25, 205, 220, 200, 100);
        expect(result).toBe('N');
    });

    test("Teste 3", () => {
        const result = canPassThroughDoor(25, 200, 220, 200, 100);
        expect(result).toBe('S');
    });

});