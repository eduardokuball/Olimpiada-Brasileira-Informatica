import getMaxCandies from '../C.js';

describe("2014 -> Fase 1 -> PacMan", () => {

    test("Teste 1", () => {
        const game = [
  [ '.', 'o', 'o', 'o', '.' ],
  [ '.', '.', 'o', 'o', 'A' ],
  [ '.', '.', 'A', 'o', 'o' ],
  [ 'A', 'o', 'o', 'o', 'o' ],
  [ '.', '.', 'o', 'o', 'o' ]
]

        const result = getMaxCandies(game);

        expect(result).toBe(6);
    });

    test("Teste 2", () => {
        const game = [ [ '.', 'o', '.' ], [ 'o', 'A', 'A' ], [ 'o', 'o', 'o' ] ]

        const result = getMaxCandies(game);

        expect(result).toBe(4);
    });

});