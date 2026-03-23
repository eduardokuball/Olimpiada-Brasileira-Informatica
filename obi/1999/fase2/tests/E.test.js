import longestTunnel from '../E.js';

describe('Maior túnel a partir da cidade de origem', () => {

    test('Caso com múltiplos túneis', () => {
        const cityOfOrigin = 2;
        const destinationCity = 4;

        const lines = [ '1 4 5', '2 4 12' ]

        expect(longestTunnel(cityOfOrigin, destinationCity, lines)).toBe(12);
    });

    test('Sem túneis saindo da origem', () => {
        const cityOfOrigin = 1;
        const destinationCity = 3;

        const lines = [ '1 2 10', '1 3 8', '2 3 12', '3 1 5' ]

        expect(longestTunnel(cityOfOrigin, destinationCity, lines)).toBe(10);
    });

});