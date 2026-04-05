import buildLargestSequence from "../A.js";

describe("2018 -> Fase 3 -> Cinco", () => {

    test("Teste 1", () => {
        const result = buildLargestSequence([7,3,0,1,0,5,6,9,7,5,4,2]);
        expect(result).toEqual([7,3,2,1,0,5,6,9,7,5,4,0]);
    });

    test("Teste 2", () => {
        const result = buildLargestSequence([7,4,1,2,9]);
        expect(result).toBe(-1);
    });

    test("Teste 3", () => {
        const result = buildLargestSequence([0,0,7,8,4,5,3,1]);
        expect(result).toEqual([1,0,7,8,4,5,3,0]);
    });

    test("Teste 4", () => {
        const result = buildLargestSequence([6,5,0,5,0,4,5,3,4,4]);
        expect(result).toEqual([6,5,4,5,0,4,5,3,4,0]);
    });

    test("Teste 5", () => {
        const result = buildLargestSequence([9,7,4,5,3,5,2]);
        expect(result).toEqual([9,7,4,5,3,2,5]);
    });

});