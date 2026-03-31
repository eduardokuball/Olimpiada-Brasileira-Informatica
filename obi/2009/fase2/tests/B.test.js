import processArrayCommands from "../B.js";

describe("2009 -> Fase 2 -> Simulador", () => {

    test("Teste 1", () => {

        const size = 10;
        const commands = 2;
        const commandsList = [ [ 'I', 1, 5 ], [ 'S', 3, 7 ] ];

        const result = processArrayCommands(size, commands, commandsList);

        expect(result).toEqual([19]);


    });

    test("Teste 2", () => {

        const size = 15;
        const commands = 4;
        const commandsList = [ [ 'S', 2, 11 ], [ 'I', 10, 15 ], [ 'I', 1, 10 ], [ 'S', 5, 10 ] ];

        const result = processArrayCommands(size, commands, commandsList);

        expect(result).toEqual([65, 21]);

    });

})