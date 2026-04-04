import calculatePenalties from "../D.js";

describe("2016 -> Fase 2 -> Arco e Flecha", () => {

    test("Teste 1", () => {
        const coords = [ { x: 1, y: 3 }, { x: 5, y: 4 } ]

        const result = calculatePenalties(coords);
        expect(result).toEqual([0, 1]);
    });

    test("Teste 2", () => {
        const coords = [
            { x: -100, y: 85 },
            { x: -25, y: -60 },
            { x: 18, y: 33 },
            { x: 0, y: 0 }
        ]

        const result = calculatePenalties(coords);
        expect(result).toEqual([0, 0, 0, 0]);
    });

    test("Teste 3", () => {
        const coords = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 1, y: 1 },
  { x: 3, y: 3 }
]

        const result = calculatePenalties(coords);
        expect(result).toEqual([0, 1, 2, 3, 3, 5]);
    });

});