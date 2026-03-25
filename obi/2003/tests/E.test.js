import erdosNumbers from "../E.js";

describe("2003 -> Fase única -> Número de Erdos", () => {

    test("Teste 1", () => {

        const articlesAuthors = [
            [ 'P. Erdos', 'A. Selberg' ],
            [ 'P. Erdos', 'J. Silva', 'M. Souza' ],
            [ 'M. Souza', 'A. Selberg', 'A. Oliveira' ],
            [ 'J. Ninguem', 'M. Ninguem' ],
            [ 'P. Duarte', 'A. Oliveira' ]
            ]

        const result = erdosNumbers(articlesAuthors);

        expect(result).toEqual([
                        'P. Duarte: 3',
                        'J. Ninguem: infinito',
                        'M. Ninguem: infinito',
                        'A. Oliveira: 2',
                        'A. Selberg: 1',
                        'J. Silva: 1',
                        'M. Souza: 1'
                        ])
    });

    test("Teste 2", () => {

        const articlesAuthors = [ [ 'Z. Silva', 'P. Erdos' ], [ 'Z. Souza' ] ];

        const result = erdosNumbers(articlesAuthors);

        expect(result).toEqual([ 'Z. Silva: 1', 'Z. Souza: infinito' ])
    })
})