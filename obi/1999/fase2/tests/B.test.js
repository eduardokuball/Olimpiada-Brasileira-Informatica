import simultaneousPeople from "../B";


describe('1999 -> fase 2 -> Restaurante', () => {

    test('Teste 1', () => {
        const timeEntrance = [14,67, 98];
        const timeOut = [1890, 1900, 2123];
        const persons = timeEntrance.length;

        expect(simultaneousPeople(timeEntrance, timeOut,persons)).toBe(3);
        });

    test('Teste 2', () => {
        const timeEntrance = [200, 1800];
        const timeOut = [1543, 2324];
        const persons = timeEntrance.length;


        expect(simultaneousPeople(timeEntrance, timeOut,persons)).toBe(1);
        });

});
