import countFloodedSections from "../C.js";

describe("2016 -> Fase 1 -> Chuva", () => {

    test("Teste 1", () => {
        const heights = [2, 1, 1, 2];
        const result = countFloodedSections(heights);
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const heights = [ 5, 2, 6, 1, 3, 0 ];
        const result = countFloodedSections(heights);
        expect(result).toBe(2);
    });

    test("Teste 3", () => {
        const heights = [4, 3, 2, 1, 1, 1, 1,1, 2, 3, 5, 5, 3, 3,2, 4, 4]
        const result = countFloodedSections(heights);
        expect(result).toBe(12);
    });


});