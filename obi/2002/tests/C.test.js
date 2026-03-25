import foldingD from "../C";

describe("2002 -> Fase única -> Dobradura", () => {

    test("Teste 1", () => {

        const foldings = 1

        const result = foldingD(foldings);

        expect(result).toBe(9);
    })

    test("Teste 2", () => {

        const foldings = 0

        const result = foldingD(foldings);

        expect(result).toBe(4);
    })

    
})