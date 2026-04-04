import distributeCalls from "../A.js";

describe("2007 -> Fase 2 -> Telemarketing", () => {

    test("Teste 1", () => {

        const sellers = 5;

        const callsTimes = [ 2, 2, 1 ];

        const result = distributeCalls(sellers, callsTimes);

        expect(result).toEqual([ 1, 1, 1, 0, 0 ]);

    });

    test("Teste 2", () => {

        const sellers = 4;

        const callsTimes = [ 5, 2, 3, 3, 4, 9 ];

        const result = distributeCalls(sellers, callsTimes);

        expect(result).toEqual([ 1, 2, 2, 1 ]);

    });

    test("Teste 3", () => {

        const sellers = 3;

        const callsTimes = [3, 5, 1, 1, 1,1, 1, 1, 1];

        const result = distributeCalls(sellers, callsTimes);

        expect(result).toEqual([ 3, 1, 5 ]);


    })
})