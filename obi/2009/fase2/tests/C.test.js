import organizeAuditorium from '../C.js';

describe('2009 -> Fase 2 -> Cadeiras do Auditório', () => {

    test('Teste 1', () => {
        const lines = 2;
        const columns = 2;

        const auditorium = [
            [4, 3],
            [1, 2]
        ];

        const result = organizeAuditorium(lines, columns, auditorium);

        expect(result).toEqual([ 2, 'L 1 2', 'C 1 2' ]);
    });

    test('Teste 2', () => {
        const lines = 1;
        const columns = 3;

        const auditorium = [
            [1, 2, 3]
        ];

        const result = organizeAuditorium(lines, columns, auditorium);

        expect(result).toEqual([0]);
    });

});