import findUpgrades from "../B.js";

describe("2007 -> Fase 1 -> Repositórios", () => {

    test("Teste 1", () => {

        const downloadeds = [ { app: '5215', version: 1 } ];
        const availables = [ { app: '5215', version: 3 } ];

        const result = findUpgrades(downloadeds, availables);

        expect(result).toEqual([ { app: '5215', version: 3 } ]);
    });

    test("Teste 2", () => {

        const downloadeds = [
                        { app: '1640', version: 1 },
                        { app: '2540', version: 4 },
                        { app: '1870', version: 3 }
                        ]
        
        const availables = [ { app: '2540', version: 1 }, { app: '1640', version: 4 } ];

        const result = findUpgrades(downloadeds, availables);

        expect(result).toEqual([ { app: '1640', version: 4 } ])
    });

    test("Teste 3", () => {

        const downloadeds = [ { app: '2000', version: 4 }, { app: '2001', version: 5 } ];

        const availables = [
            { app: '2000', version: 1 },
            { app: '2001', version: 4 },
            { app: '2001', version: 6 },
            { app: '2000', version: 2 },
            { app: '2000', version: 3 }
        ];

        const result = findUpgrades(downloadeds, availables);

        expect(result).toEqual([ { app: '2001', version: 6 } ])

    })
})