import findFinalPosition from "../B.js";

describe("2017 -> Fase 2 -> Mapa", () => {

    test("Teste 1", () => {
        const grid = [ 'HHHH', 
                       'H...', 
                       'o.HH' 
                    ]

        const result = findFinalPosition(grid);
        expect(result).toEqual([1, 4]);
    });

    test("Teste 2", () => {
        const grid = [ '...HHH.', 
                        'HHH....', 
                        'H.HHH..', 
                        'H...HH.', 
                        'H.o....', 
                        'HHH.HH.' ]

        const result = findFinalPosition(grid);
        expect(result).toEqual([4, 6]);
    });

});