import findBestFrame from "../B.js";

describe("2020 -> Fase 2 -> Fotografia", () => {

    test("Teste 1", () => {
        const result = findBestFrame(
            10, 20,
            [
                [20, 20],
                [25, 10],
                [5, 5]
            ]
        );
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const result = findBestFrame(
            24, 30,
            [
                [25, 25]
            ]
        );
        expect(result).toBe(-1);
    });

    test("Teste 3", () => {
        const result = findBestFrame(
            20, 20,
            [
                [30, 30],
                [30, 10],
                [35, 40],
                [25, 36]
            ]
        );
        expect(result).toBe(1);
    });

});