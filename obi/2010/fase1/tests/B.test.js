import countShipsHit from '../B.js';

describe("2010 -> Fase 1 -> Batalha Naval", () => {

    test("Teste 1", () => {

        const lines = 5
        const columns = 5
        const linesData = [ '..#.#', '#....', '...#.', '#....', '...#.' ];
        const commandsList = [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 1 ], [ 3, 4 ] ];

        const result = countShipsHit(lines, columns, linesData, commandsList);

        expect(result).toBe(4);
    });

    test("Teste 2", () => {
        const lines = 5;
        const columns = 5;
        const linesData = [ '..###', '.....', '#####', '.....', '#.##.' ];
        const commandsList = [ [ 5, 1 ], [ 5, 2 ], [ 1, 3 ], [ 1, 4 ], [ 1, 5 ] ];

        const result = countShipsHit(lines, columns, linesData, commandsList);

        expect(result).toBe(2);
    });

    test("Teste 3", () => {

        const lines = 7;
        const columns = 7;
        const linesData = [
                '.#....#',
                '###..##',
                '.#....#',
                '....#.#',
                '.#..#.#',
                '.####.#',
                '.......'
                ]
        const commandsList = [
                [ 1, 1 ], [ 1, 2 ],
                [ 2, 1 ], [ 2, 2 ],
                [ 2, 3 ], [ 3, 2 ],
                [ 5, 2 ], [ 6, 2 ]
                ];

        const result = countShipsHit(lines, columns, linesData, commandsList);

        expect(result).toBe(1);
        
    })
})