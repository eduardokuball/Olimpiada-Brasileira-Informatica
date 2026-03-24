import mergeIntervals from "../D";

describe("2001 -> Fase única -> Sorvete", () => {

    test("Teste 1", () => {
        const occupations = [ { start: 0, end: 21 }, { start: 110, end: 180 } ]

        const result = mergeIntervals(occupations);

        expect(result).toEqual([ { start: 0, end: 21 }, { start: 110, end: 180 } ]);
    });

    test("Teste 2", () => {
        const occupations = [
                    { start: 10, end: 400 },
                    { start: 80, end: 200 },
                    { start: 400, end: 1000 }
        ]

        const result = mergeIntervals(occupations);

        expect(result).toEqual([ { start: 10, end: 1000 } ]);
    })

    test("Teste 3", () => {
        const occupations = [ { start: 1, end: 4 }, { start: 5, end: 6 } ]

        const result = mergeIntervals(occupations);

        expect(result).toEqual([ { start: 1, end: 4 }, { start: 5, end: 6 } ]);
    })

})