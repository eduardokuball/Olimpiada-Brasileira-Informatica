import findCommonPassword from "../E.js";

describe("2004 -> Fase única -> Proteja sua senha", () => {

    test("Teste 1", () => {
        const associationsPasswords = [
                    {
                        association: { A: [], B: [], C: [], D: [], E: [] },
                        password: [ 'B', 'C', 'E', 'A', 'E', 'B' ]
                    },
                    {
                        association: { A: [], B: [], C: [], D: [], E: [] },
                        password: [ 'E', 'C', 'C', 'B', 'D', 'A' ]
                    }
                    ];
        
        const result = findCommonPassword(associationsPasswords);

        expect(result).toBe('3 8 4 7 2 9');
    });

    test("Teste 2", () => {
        const associationsPasswords = [
        {
            association: { A: [], B: [], C: [], D: [], E: [] },
            password: [ 'B', 'C', 'D', 'D', 'E', 'E' ]
        },
        {
            association: { A: [], B: [], C: [], D: [], E: [] },
            password: [ 'E', 'B', 'C', 'D', 'C', 'D' ]
        },
        {
            association: { A: [], B: [], C: [], D: [], E: [] },
            password: [ 'A', 'C', 'D', 'D', 'E', 'C' ]
        }
        ];

        const result = findCommonPassword(associationsPasswords);

        expect(result).toBe('2 5 6 7 8 9');
    })
})