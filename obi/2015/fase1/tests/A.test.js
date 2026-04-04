import isDifferent from '../A.js';

describe("2015 -> Fase 1 -> Cobra coral", () => {

    test("Teste 1", () => {
        const result = isDifferent(5, 3, 9, 3);
        expect(result).toBe("V");
    });

    test("Teste 2", () => {
        const result = isDifferent(7, 1, 4, 7);
        expect(result).toBe("F");
    });

    test("Teste 3", () => {
        const result = isDifferent(6, 2, 6, 8);
        expect(result).toBe("V");
    });

});