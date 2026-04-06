import getCutOffGrade from "../B.js";

describe("2024 -> Fase 1 -> Concurso", () => {

    test("Teste 1", () => {
        const result = getCutOffGrade([92, 83, 98], 1);
        expect(result).toBe(98);
    });

    test("Teste 2", () => {
        const result = getCutOffGrade([1, 2, 3, 4], 2);
        expect(result).toBe(3);
    });

    test("Teste 3", () => {
        const result = getCutOffGrade([20, 20, 10, 20, 30], 3);
        expect(result).toBe(20);
    });

    test("Teste 4", () => {
        const result = getCutOffGrade([1, 2, 2, 1, 2, 2, 1, 1, 1, 1], 5);
        expect(result).toBe(1);
    });

});