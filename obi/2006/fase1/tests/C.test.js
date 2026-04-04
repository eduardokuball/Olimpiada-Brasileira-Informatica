import minTourTime from "../C.js";

describe("2006 -> Fase 1 -> Museu", () => {

    test("Teste 1", () => {

        const roomsQuantity = 2;
        const roomsWeights = [ 1, 1 ];
        const edges = [ [ 1, 2, 1 ], [ 2, 1, 3 ] ];

        const result = minTourTime(roomsQuantity, roomsWeights, edges);

        expect(result).toBe(6);
    });

    test("Teste 2", () => {

        const roomsQuantity = 5;
        const roomsWeights = [ 5, 5, 10, 10, 5 ];
        const edges = [
                        [ 1, 2, 1 ],
                        [ 2, 3, 1 ],
                        [ 5, 1, 1 ],
                        [ 3, 4, 1 ],
                        [ 4, 1, 1 ],
                        [ 5, 2, 1 ]
                    ];

        const result = minTourTime(roomsQuantity, roomsWeights, edges);

        expect(result).toBe(34);
    });

    test("Teste 3", () => {

        const roomsQuantity = 8;
        const roomsWeights = [3, 10, 8, 4, 1,  1, 8, 1];
        const edges = [
                        [ 1, 2, 1 ], [ 1, 3, 10 ],
                        [ 4, 1, 1 ], [ 5, 8, 1 ],
                        [ 3, 7, 1 ], [ 7, 5, 2 ],
                        [ 8, 4, 2 ], [ 2, 3, 2 ],
                        [ 3, 6, 1 ], [ 6, 7, 2 ]
                    ];

        const result = minTourTime(roomsQuantity, roomsWeights, edges);

        expect(result).toBe(42);

        
    })
})