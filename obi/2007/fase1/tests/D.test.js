import isPerfectFolders from '../D.js';

describe('2007 -> Fase 1 -> Pastas', () => {

    test('Teste 1', () => {
        const tabs = 4;
        const folders = [1, 1, 2, 2, 3, 3, 4];

        const result = isPerfectFolders(tabs, folders);

        expect(result).toBe('S');
    });

    test('Teste 2', () => {
        const tabs = 3;
        const folders = [1, 2, 3, 1, 2, 1];

        const result = isPerfectFolders(tabs, folders);

        expect(result).toBe('N');
    });

    test("Teste 3", () => {
        const tabs = 2;
        const folders = [1,2];

        const result = isPerfectFolders(tabs, folders);

        expect(result).toBe('S');
    })

});