import longestTunnel from '../E.js';

describe('1999 -> Fase 2 -> Carga Pesada', () => {

    test('Teste 1', () => {
        const cityOfOrigin = 2;
        const destinationCity = 4;

        const roads = [
            { cityOfStart: 1, cityOfEnd: 4, tunnelHeight: 5 },
            { cityOfStart: 2, cityOfEnd: 4, tunnelHeight: 12 },
        ];

        expect(longestTunnel(cityOfOrigin, destinationCity, roads)).toBe(12);
    });

    test('Teste 2', () => {
        const cityOfOrigin = 1;
        const destinationCity = 3;

        const roads = [
            { cityOfStart: 1, cityOfEnd: 2, tunnelHeight: 10 },
            { cityOfStart: 1, cityOfEnd: 3, tunnelHeight: 8 },
            { cityOfStart: 2, cityOfEnd: 3, tunnelHeight: 12 },
            { cityOfStart: 3, cityOfEnd: 1, tunnelHeight: 5 },
        ];

        expect(longestTunnel(cityOfOrigin, destinationCity, roads)).toBe(10);
    });

});