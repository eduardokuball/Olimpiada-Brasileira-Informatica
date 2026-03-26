import findCommonPassword from "../E.js";

describe("2004 -> Fase única -> Proteja sua senha", () => {

    test("Teste 1", () => {
        const associationsPasswords = [
                    {
                        association: { A: [1,7], B: [3,9], C: [0,8], D: [5,6], E: [2,4] },
                        password: [ 'B', 'C', 'E', 'A', 'E', 'B' ]
                    },
                    {
                        association: { A: [9,0], B: [7,5], C: [8,4], D: [6,2], E: [3,1] },
                        password: [ 'E', 'C', 'C', 'B', 'D', 'A' ]
                    }
                    ];
        
        const result = findCommonPassword(associationsPasswords);

        expect(result).toBe('3 8 4 7 2 9');
    });

    test("Teste 2", () => {
        const associationsPasswords = [
        {
            association: { A: [0,1], B: [2,3], C: [4,5], D: [6,7], E: [8,9] },
            password: [ 'B', 'C', 'D', 'D', 'E', 'E' ]
        },
        {
            association: { A: [1,3], B: [5,4], C: [6,8], D: [7,9], E: [0,2] },
            password: [ 'E', 'B', 'C', 'D', 'C', 'D' ]
        },
        {
            association: { A: [3,2], B: [0,4], C: [5,9], D: [7,6], E: [8,1] },
            password: [ 'A', 'C', 'D', 'D', 'E', 'C' ]
        }
        ];

        const result = findCommonPassword(associationsPasswords);

        expect(result).toBe('2 5 6 7 8 9');
    });
})