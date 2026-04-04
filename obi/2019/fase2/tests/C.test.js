import values from "../C.js";

describe("2019 -> Fase 2 -> Supermercado", () => {

    test("Teste 1", () => {
        
        const valuesData = [ [ 3, 100 ], [ 2, 100 ], [ 5, 100 ] ];

        const result = values(valuesData);

        expect(result).toBe(20.00);
    });

    test("Teste 2", () => {

        const valuesData = [ [ 100, 500 ], [ 190, 1000 ], [ 200, 900 ], [ 110, 550 ] ];

        const result = values(valuesData);

        expect(result).toBe(190.00)
    });

    test("Teste 3", () => {

        const valuesData = [[ 46.5, 794 ],[ 25.72, 130 ],[ 66, 800 ], [ 22.45, 110 ], [ 38.99, 453 ]];

        const result = values(valuesData);

        expect(result).toBe(58.56)
    })

})