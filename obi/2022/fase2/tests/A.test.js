import calculateFuelToBuy from "../A.js";

describe("2022 -> Fase 2 -> Tanque de combustível", () => {

    test("Teste 1", () => {
        const result = calculateFuelToBuy(2, 10, 0);
        expect(result).toBe(5.0);
    });

    test("Teste 2", () => {
        const result = calculateFuelToBuy(30, 100, 2);
        expect(result).toBe(1.3);
    });

    test("Teste 3", () => {
        const result = calculateFuelToBuy(50, 120, 3);
        expect(result).toBe(0.0);
    });

    test("Teste 4", () => {
        const result = calculateFuelToBuy(50, 73, 0);
        expect(result).toBe(1.5);
    });

});