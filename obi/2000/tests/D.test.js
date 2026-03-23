import bestGames from "../D";

describe('2000 -> fase única -> Saldo de Gols', () => {

    test('Teste 1', () => {
       const quantityGames = 9;
       const lines = [
                    '2 2', 
                    '0 5',
                    '6 2', 
                    '1 4',
                    '0 0', 
                    '5 1',
                    '1 5', 
                    '6 2',
                    '0 5'
                ]

       const result = bestGames(quantityGames,lines);

       expect(result).toBe("3 8");
    });

    test('Teste 2', () => {
       const quantityGames = 2;
       const lines = [ '2 3', 
                        '7 1' 
                    ]

       const result = bestGames(quantityGames,lines);

       expect(result).toBe("2 2");
    });

    test('Teste 2', () => {
       const quantityGames = 3;
       const lines = [ '0 2', 
                       '0 3', 
                       '0 4' ]

       const result = bestGames(quantityGames,lines);

       expect(result).toBe("Nenhum");
    });

});