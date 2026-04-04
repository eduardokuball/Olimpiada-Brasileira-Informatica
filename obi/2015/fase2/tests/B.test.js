import isMovementPossible from '../B.js';

describe("2015 -> Fase 2 -> Chocolate em barra", () => {

    test("Teste 1", () => {
        const result = isMovementPossible(4,1,2,4,2);
        expect(result).toBe("S");
    });

    test("Teste 2", () => {
        const result = isMovementPossible(6,3,4,2,6);
        expect(result).toBe("N");
    });

});