import operations from "../C.js";

describe("2025 -> Fase 3 -> Baldes", () => {

    test("Teste 1", () => {

        const bucketsInput = [ [ 3 ],  [ 9 ], [ 12 ], [ 4 ],[ 20 ], [ 5 ], [ 7 ],  [ 15 ], [ 9 ],  [ 10 ]];
        const ops = [
            { type: 1, ball: 1, i: 4 },
            { type: 1, ball: 33, i: 7 },
            { type: 2, start: 5, end: 8 },
            { type: 1, ball: 15, i: 1 },
            { type: 2, start: 0, end: 6 }
        ];

        const result = operations(bucketsInput, ops);

        expect(result).toEqual([ 28, 17 ]);
    });

    test("Teste 2", () => {

        const bucketsInput = [ [ 100 ], [ 200 ] ];
        const ops = [
            { type: 2, start: 0, end: 1 },
            { type: 1, ball: 55, i: 0 },
            { type: 2, start: 0, end: 1 }
        ]

        const result = operations(bucketsInput, ops);

        expect(result).toEqual([100,145])
    })
})