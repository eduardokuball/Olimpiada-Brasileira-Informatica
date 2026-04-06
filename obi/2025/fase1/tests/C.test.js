import countHiddenStudents from "../C.js";

describe("2025 -> Fase 1 -> Fila", () => {

    test("Teste 1", () => {
        const result = countHiddenStudents([200, 180, 190, 140, 160]);
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const result = countHiddenStudents([180, 180, 170, 150, 190]);
        expect(result).toBe(4);
    });

    test("Teste 3", () => {
        const result = countHiddenStudents([150, 150]);
        expect(result).toBe(1);
    });

});