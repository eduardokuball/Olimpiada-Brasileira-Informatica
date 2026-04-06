import Ogro from "../A.js";

describe("2024 -> Fase 1 -> Ogro", () => {

    test("Teste 1", () => {
        const result = Ogro(2, 5);
        expect(result).toBe(6);
    });

    test("Teste 2", () => {
        const result = Ogro(3, 7);
        expect(result).toBe(8);
    });

    test("Teste 3", () => {
        const result = Ogro(5, 5);
        expect(result).toBe(0);
    });

});