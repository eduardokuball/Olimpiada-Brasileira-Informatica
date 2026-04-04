import solve from '../E.js';

describe("2008 -> Fase 1 -> Ogros", () => {

    test("Teste 1", () => {

        const strips = 3;
        const powers = [ 3, 5 ];
        const pontuations = [ 1, 4, 7 ];
        const ogros = [ 2, 3, 9, 4 ]
        
        const result = solve(strips, powers, pontuations, ogros);

        expect(result).toEqual([1,4,7,4]);


    });

    test("Teste 2", () => {

        const strips = 2;
        const powers = [4];
        const pontuations = [ 5, 200 ];
        const ogros = [1, 3, 4, 5, 5,6, 2, 1, 3, 4];

        const result = solve(strips, powers, pontuations, ogros);

        expect(result).toEqual([5 ,5 ,200 ,200 ,200 ,200 ,5 ,5 ,5 ,200]);

    });

    test('Teste 3', () => {

        const strips = 10;
        const powers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const pontuations = [1,  10, 100, 101, 102, 103, 104, 105, 106, 200];
        const ogros = [5];

        const result = solve(strips, powers, pontuations, ogros);

        expect(result).toEqual([103]);
    })
})