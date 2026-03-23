import crosswords from '../C.js'

describe('1999 -> Fase 1 -> Palavras Cruzadas', () => {
    test('Teste 1', () => {
        const board = ['*PASCAL*'.split('')];
        const result = {
            horizontal: [{ number: 1, word: 'PASCAL' }],
            vertical: []
        };
        expect(crosswords(board)).toEqual(result);
    });

    test('Teste 2', () => {
        const board = ['*M*', 'BIT', '*L*']
            .map(e => e.split(''));
        const result = {
            horizontal: [{ number: 2, word: 'BIT' }],
            vertical: [{ number: 1, word: 'MIL' }]
        };
        expect(crosswords(board)).toEqual(result);
    });

    test('Teste 3', () => {
        const board = [
            'ATOS**J',
            'MEMORIA',
            '*COLE*V',
            '*L**DIA',
            'LA*VER*'
        ].map(e => e.split(''));
        const result = {
            horizontal: [
                { number: 1, word: 'ATOS' },
                { number: 6, word: 'MEMORIA' },
                { number: 8, word: 'COLE' },
                { number: 9, word: 'DIA' },
                { number: 11, word: 'LA' },
                { number: 12, word: 'VER' },
            ],
            vertical: [
                { number: 1, word: 'AM' },
                { number: 2, word: 'TECLA' },
                { number: 3, word: 'OMO' },
                { number: 4, word: 'SOL' },
                { number: 5, word: 'JAVA' },
                { number: 7, word: 'REDE' },
                { number: 10, word: 'IR' },
            ]
        };
        expect(crosswords(board)).toEqual(result);
    });
});
