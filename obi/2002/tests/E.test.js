import reachableCities from "../E.js";

describe("2002 -> Fase única -> Pedágio", () => {
    
    test("Teste 1", () => {
        const cities = 5
        const currentCity = 2
        const maximum = 1
        const edges = [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ] ]; 

        const result = reachableCities(cities, currentCity, maximum, edges);

        expect(result).toBe("1 3");
    });

    test("Teste 2", () => {
        const cities = 9
        const currentCity = 1
        const maximum = 2
        const edges = [
                    [ 2, 1 ], [ 1, 5 ],
                    [ 2, 1 ], [ 3, 2 ],
                    [ 9, 3 ], [ 3, 4 ],
                    [ 4, 8 ], [ 4, 7 ],
                    [ 7, 6 ], [ 5, 6 ],
                    [ 4, 5 ], [ 3, 7 ]
                    ]

        const result = reachableCities(cities, currentCity, maximum, edges);

        expect(result).toBe("2 3 4 5 6");
    })
})