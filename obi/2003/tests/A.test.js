import distribution from "../A.js";

describe("2003 -> Fase única -> Cofrinhos da Vó Vitória", () => {

    test("Teste 1", () => {
        const quantity = 3
        const rouds = [ [ 20, 25 ], [ 10, 5 ], [ 10, 10 ] ];

        const result = distribution(quantity,rouds);

        expect(result).toEqual([ -5, 0, 0 ]);
    });

    test("Teste 2", () => {
        const quantity = 4
        const rouds = [ [ 0, 5 ], [ 12, 0 ], [ 0, 20 ], [ 17, 1 ] ];

        const result = distribution(quantity,rouds);

        expect(result).toEqual([ -5, 7, -13, 3 ]);
    });
})