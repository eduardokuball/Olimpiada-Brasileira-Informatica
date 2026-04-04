import splitTeamsByDislikes from "../B.js";

describe("2016 -> Fase 2 -> Times", () => {

    test("Teste 1", () => {
        const result = splitTeamsByDislikes([
            { id: 1, requirement: [12, 9] },
            { id: 2, requirement: [10] },
            { id: 3, requirement: [8, 12, 13] },
            { id: 4, requirement: [8, 10, 13, 6, 5] },
            { id: 5, requirement: [11, 4] },
            { id: 6, requirement: [4] },
            { id: 7, requirement: [8] },
            { id: 8, requirement: [4, 3, 7] },
            { id: 9, requirement: [1] },
            { id: 10, requirement: [2, 4] },
            { id: 11, requirement: [5] },
            { id: 12, requirement: [3, 1] },
            { id: 13, requirement: [4, 3] }
        ]);

        expect(result).toEqual([[ 1, 2, 3, 4, 7, 11 ],[5,  6,  8, 9,10, 12, 13]]);
    });

    test("Teste 2", () => {
        const result = splitTeamsByDislikes([
            { id: 1, requirement: [13] },
            { id: 2, requirement: [13] },
            { id: 3, requirement: [13] },
            { id: 4, requirement: [13] },
            { id: 5, requirement: [13] },
            { id: 6, requirement: [13] },
            { id: 7, requirement: [13] },
            { id: 8, requirement: [13] },
            { id: 9, requirement: [13] },
            { id: 10, requirement: [13] },
            { id: 11, requirement: [13] },
            { id: 12, requirement: [13] },
            {
                id: 13,
                requirement: [
                    11, 7, 1, 10, 8, 6,
                    14, 12, 3, 2, 15, 5,
                    4, 9
                ]
            },
            { id: 14, requirement: [13] },
            { id: 15, requirement: [13] }
        ]);

        expect(result).toEqual([[1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12,14, 15],[13]]);
    });


});