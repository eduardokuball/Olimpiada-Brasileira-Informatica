import calculateMaxEvolutions from "../A.js";

describe("2016 -> Fase 2 -> Pô, que mão", () => {

    test("Teste 1", () => {
        const result = calculateMaxEvolutions([ 220, 100, 190 ], 300);
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const result = calculateMaxEvolutions([300,100,200], 1000);
        expect(result).toBe(3);
    });
});