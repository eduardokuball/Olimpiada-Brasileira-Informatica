import solve from '../C.js';

describe('2008 -> Fase 2 -> Ortografia', () => {

    test('Teste 1', () => {
        const wordsInDic = 3;
        const wordsInAnalisys = 3;

        const dic = ['pato', 'pateta', 'caneca'];
        const words = ["pat","ccanecos","pata"];

        const result = solve(wordsInDic, wordsInAnalisys, dic, words);

        expect(result).toEqual([ 'pato', '', 'pato pateta' ]);
    });

    test('Teste 2', () => {

        const wordsInDic = 2;
        const wordsInAnalisys = 1;

        const dic = ['abc', 'def'];
        const words = ['xyz'];

        const result = solve(wordsInDic, wordsInAnalisys, dic, words);

        expect(result).toEqual(['']);
    });

});