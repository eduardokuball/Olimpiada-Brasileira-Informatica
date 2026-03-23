import longestTunnel from '../E.js';

describe('1999 -> fase 2 -> Carga Pesada', () => {

    test('Teste 1 ', () => {
        const cityOfOrigin = 2;
        const destinationCity = 4;

        const lines = [ '1 4 5', '2 4 12' ]

        expect(longestTunnel(cityOfOrigin, destinationCity, lines)).toBe(12);
    });

    test('Teste 2', () => {
        const cityOfOrigin = 1;
        const destinationCity = 3;

        const lines = [ '1 2 10', '1 3 8', '2 3 12', '3 1 5' ]

        expect(longestTunnel(cityOfOrigin, destinationCity, lines)).toBe(10);
    });

});