import countMissingCards from "../D.js";

describe("2021 -> Fase 1 -> Baralho", () => {

    test("Teste 1", () => {
        const result = countMissingCards("11P01C02C01U02U03U04U");
        expect(result).toEqual([11, 13, 9, 12]);
    });

    test("Teste 2", () => {
        const result = countMissingCards("13P02P01P03P04P05P06P07P08P09P10P11P12P");
        expect(result).toEqual([13, 13, 13, 0]);
    });

    test("Teste 3", () => {
        const result = countMissingCards("01C02C03C04C05C07C09C10C11C02E02E03E11U");
        expect(result).toEqual([4, "erro", 12, 13]);
    });

});