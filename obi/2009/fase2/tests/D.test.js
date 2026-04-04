import getBestTrio from '../D.js';

describe("2009 -> Fase 2 -> Banda", () => {

    test("Teste 1", () => {

        const musics = 3;
        const pares = 3;
        
        const edges = [ [ 1, 2, 50 ], [ 2, 3, 27 ], [ 3, 1, 1 ] ];

        const result = getBestTrio(musics, pares, edges);

        expect(result).toBe("1 2 3");
    });

    test("Teste 2", () => {

        const musics = 5;
        const pares = 8;

        const edges = [
            [ 1, 2, 10 ],
            [ 1, 3, 50 ],
            [ 1, 4, 50 ],
            [ 2, 3, 10 ],
            [ 2, 5, 10 ],
            [ 3, 4, 50 ],
            [ 3, 5, 25 ],
            [ 4, 5, 20 ]
        ]

        const result = getBestTrio(musics, pares, edges);

        expect(result).toBe("1 3 4");
    });
})