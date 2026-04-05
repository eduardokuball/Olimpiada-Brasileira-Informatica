import countMissingStickers from "../B.js";

describe("2018 -> Fase 1 -> Figurinhas da Copa", () => {

    test("Teste 1", () => {
        const result = countMissingStickers(
            [4, 7],
            [7, 1, 2, 8, 3]
        );
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const result = countMissingStickers(
            [4, 7],
            [7, 1, 8, 4, 9, 3]
        );
        expect(result).toBe(0);
    });

    test("Teste 3", () => {
        const result = countMissingStickers(
            [2, 4, 6, 8],
            [3, 1, 1, 5, 9, 1, 7, 7, 1, 1]
        );
        expect(result).toBe(4);
    });

});