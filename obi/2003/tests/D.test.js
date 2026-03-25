import findMedianPoint from "../D.js";

describe("2003 -> Fase única -> Supermercado", () => {

    test("Teste 1", () => {

        const stores = [ { x: 1, y: 2 }, { x: -3, y: -3 }, { x: 4, y: -1 }, { x: -5, y: 0 } ]

        const result = findMedianPoint(stores);

        expect(result).toBe("-1 0");
    });

    test("Teste 2", () => {

        const stores = [
            { x: 1, y: 3 },
            { x: 7, y: 13 },
            { x: 25, y: 13 },
            { x: 15, y: 14 },
            { x: 25, y: 1 }
            ]

        const result = findMedianPoint(stores);

        expect(result).toBe("15 13");
    });
})