import determineGroup from "../A.js";

describe("2021 -> Fase 1 -> Torneio de tênis", () => {

    test("Teste 1", () => {
        const result = determineGroup(["V", "V", "P", "P", "P", "V"]);
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const result = determineGroup(["P", "P", "P", "P", "P", "P"]);
        expect(result).toBe(-1);
    });

});