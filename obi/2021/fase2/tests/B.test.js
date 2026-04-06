import countContractions from "../B.js";

describe("2021 -> Fase 2 -> Lista Palíndroma", () => {

    test("Teste 1", () => {
        const result = countContractions([10, 60, 20, 40, 10]);
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const result = countContractions([999, 1, 999, 1, 999]);
        expect(result).toBe(0);
    });

    test("Teste 3", () => {
        const result = countContractions([10, 40, 30, 20]);
        expect(result).toBe(2);
    });

});