import getBestCity from '../D.js';

describe("2010 -> Fase 1 -> Reunião", () => {

    test("Teste 1", () => {

        const cities = 4;
        const roads = 4;

        const edges = [ [ 0, 1, 2 ], [ 0, 2, 4 ], [ 1, 3, 1 ], [ 2, 3, 5 ] ];

        const result = getBestCity(cities, roads, edges);

        expect(result).toBe(4);
    });

    test("Teste 2", () => {

        const cities = 4;
        const roads = 5;

        const edges = [ [ 0, 1, 2 ], [ 0, 2, 4 ], [ 1, 3, 1 ], [ 2, 3, 5 ], [ 3, 2, 2 ] ];

        const result = getBestCity(cities, roads, edges);

        expect(result).toBe(3);

    });

    test("Teste 3", () => {

        const cities = 7;
        const roads = 12;

        const edges = [
                [ 0, 1, 22 ], [ 0, 2, 30 ],
                [ 0, 5, 35 ], [ 1, 5, 11 ],
                [ 1, 6, 30 ], [ 1, 2, 25 ],
                [ 2, 3, 15 ], [ 2, 6, 10 ],
                [ 3, 4, 15 ], [ 3, 5, 10 ],
                [ 4, 5, 20 ], [ 5, 6, 33 ]
            ]

        const result = getBestCity(cities, roads, edges);

        expect(result).toBe(30);
    })
})