import calculateStayTotal from "../A.js";

describe("2022 -> Fase 1 -> Hotel", () => {

    test("Teste 1", () => {
        const result = calculateStayTotal(100, 10, 1);
        expect(result).toBe(3100);
    });

    test("Teste 2", () => {
        const result = calculateStayTotal(100, 20, 15);
        expect(result).toBe(6460);
    });

    test("Teste 3", () => {
        const result = calculateStayTotal(100, 5, 16);
        expect(result).toBe(2720);
    });

});