import findCheapestRoute from "../D.js";

describe("2017 -> Fase 2 -> Frete", () => {

    test("Teste 1", () => {
        const result = findCheapestRoute(5, [
  [ 1, 2, 4 ],
  [ 1, 3, 3 ],
  [ 4, 3, 6 ],
  [ 4, 5, 2 ],
  [ 2, 4, 1 ],
  [ 3, 5, 5 ]
]);

        expect(result).toBe(7);
    });

    test("Teste 2", () => {
        const result = findCheapestRoute(7, [
  [ 1, 2, 5 ],  [ 3, 1, 32 ],
  [ 1, 4, 3 ],  [ 2, 3, 4 ],
  [ 2, 6, 20 ], [ 6, 3, 1 ],
  [ 6, 4, 9 ],  [ 6, 5, 6 ],
  [ 3, 7, 18 ], [ 5, 7, 2 ]
]);

        expect(result).toBe(18);
    });

});