import photos from "../A.js";

describe("2025 -> Fase 3 -> Photos", () => {
    test("Teste 1", () => {
        const result = photos([1, 0, 0, 1, 0]);
        expect(result).toBe(9);
    });

    test("Teste 2", () => {
        const result = photos([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(result).toBe(36);
    });
});
