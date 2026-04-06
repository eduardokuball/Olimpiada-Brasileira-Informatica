import balancing from '../A.js';

describe("2022 -> Fase 3 -> Caravana", () => {

    test("Teste 1", () => {

        const weights = [ 100, 104, 108 ];

        const result = balancing(weights);

        expect(result).toEqual([ 4, 0, -4 ])
    });

    test("Teste 2", () => {

        const weights = [ 30, 40, 23, 5, 32 ];

        const result = balancing(weights);

        expect(result).toEqual([ -4, -14, 3, 21, -6 ])

    });

    test("Teste 3", () => {

        const weights = [ 10000, 10000, 10000 ];

        const result = balancing(weights);

        expect(result).toEqual([ 0, 0, 0 ])

    })
})