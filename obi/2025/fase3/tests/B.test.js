import stairway from "../B.js";

describe("2025 -> Fase 3 -> Escadaria", () => {
    test("Teste 1", () => {
        const result = stairway([5, -1, -1, -1, 6]);
        expect(result).toEqual([5, 6, 7, 7, 6]);
    });

    test("Teste 2", () => {
        const result = stairway([-1, -1, 4, -1, -1, -1, 2, -1, -1, 2, -1, -1]);
        expect(result).toEqual([6, 5, 4, 5, 4, 3, 2, 3, 3, 2, 3, 4]);
    });

    test("Teste 3", () => {
        const result = stairway([-1, -1, -1, 10, -1, -1, -1, -1, -1, -1]);
        expect(result).toEqual([13, 12, 11, 10, 11, 12, 13, 14, 15, 16]);
    });
});
