import calculateDiameter from "../B.js";

describe("2004 -> Fase única -> Cubra os furos", () => {

    test("Teste 1", () => {

        const points = [ { x: 20, y: 25 }, { x: 10, y: 5 }, { x: 10, y: 10 } ];

        const result = calculateDiameter(points);

        expect(result).toBe(42);
    });

    test("Teste 2", () => {

        const points = [ { x: 0, y: 5 }, { x: 10, y: 0 }, { x: 0, y: 10 } ];

        const result = calculateDiameter(points);

        expect(result).toBe(28);
    });
})