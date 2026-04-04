import calculateScore from '../B.js';

describe("2013 -> Fase 1 -> Tiro ao Alvo", () => {

    test("Teste 1", () => {
        const radii =  [1, 2, 5 ]
        const shots = [
                    [ 0, 0 ],   [ -2, 0 ],
                    [ 0, -2 ],  [ 3, -4 ],
                    [ -4, -3 ], [ 3, 1 ],
                    [ 6, 2 ],   [ -1, 2 ],
                    [ -5, -2 ], [ 1, -1 ]
                ]
        const result = calculateScore(radii, shots);

        expect(result).toBe(13);
    });

    test("Teste 2", () => {
        const radii = [1, 2, 5];
        const shots = [ [ 1, 0 ], [ 0, 3 ], [ -5, 0 ], [ 0, 0 ], [ -3, -3 ], [ 1, 1 ] ]

        const result = calculateScore(radii, shots);

        expect(result).toBe(11);
    });

});