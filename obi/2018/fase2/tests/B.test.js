import canArrangeBoxes from "../B.js";

describe("2018 -> Fase 2 -> Elevador", () => {

    test("Teste 1", () => {
        const result = canArrangeBoxes([15, 4, 10]);
        expect(result).toBe('S');
    });

    test("Teste 2", () => {
        const result = canArrangeBoxes([25, 2, 6, 15, 40, 35, 35, 20]);
        expect(result).toBe('N');
    });

    test("Teste 3", () => {
        const result = canArrangeBoxes([14, 10, 23, 20]);
        expect(result).toBe('N');
    });

    test("Teste 4", () => {
        const result = canArrangeBoxes([8]);
        expect(result).toBe('S');
    });

});