import getMinimumTime from '../C.js';

describe("2012 -> Fase 2 -> Bomba", () => {

    test("Teste 1", () => {
        const roundabouts = 6;
        const entrance = 5;
        const exit = 4;

        const streets = [
            [0, 1, 0],
            [1, 2, 0],
            [1, 2, 1],
            [2, 3, 1],
            [2, 4, 0],
            [3, 0, 0],
            [5, 0, 1]
        ];

        const result = getMinimumTime(roundabouts, entrance, exit, streets);

        expect(result).toBe(8);
    });

    test("Teste 2", () => {
        const roundabouts = 4;
        const entrance = 0;
        const exit = 3;

        const streets = [
            [0, 1, 1],
            [1, 2, 0],
            [2, 3, 1],
            [2, 0, 0]
        ];

        const result = getMinimumTime(roundabouts, entrance, exit, streets);

        expect(result).toBe('*');
    });

});