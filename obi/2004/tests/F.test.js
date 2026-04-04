import solveFriendships from "../F.js";

describe("2004 -> Fase única -> Orkut", () => {

    test("Teste 1", () => {

        const quantity = 5;
        const friends = [ 'Joao', 'Maria', 'Tadeu', 'Jose', 'Ricardo' ];
        const requirementsData = [
                    { name: 'Joao', requirements: [ 'Maria', 'Ricardo' ] },
                    { name: 'Maria', requirements: [ 'Tadeu' ] },
                    { name: 'Jose', requirements: [ 'Joao' ] },
                    { name: 'Tadeu', requirements: [] },
                    { name: 'Ricardo', requirements: [] }
        ];

        const result = solveFriendships(quantity, friends, requirementsData);

        expect(result).toBe("Tadeu Ricardo Maria Joao Jose");
    });

    test("Teste 2", () => {

        const quantity = 3;
        const friends = [ 'Joao', 'Maria', 'Renata' ];
        const requirementsData = [
                { name: 'Maria', requirements: [ 'Joao' ] },
                { name: 'Joao', requirements: [ 'Renata' ] },
                { name: 'Renata', requirements: [ 'Maria' ] }
        ];

        const result = solveFriendships(quantity, friends, requirementsData);

        expect(result).toBe("impossivel");
    })
})