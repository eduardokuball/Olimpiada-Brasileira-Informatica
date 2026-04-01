import canFitPhotosInPage from '../A.js';

describe("2011 -> Fase 2 -> Álbum de fotos", () => {

    test("Teste 1", () => {
        const photos = [
            { width: 3, height: 4 },
            { width: 3, height: 4 }
        ];
        const result = canFitPhotosInPage(photos, 7, 5);

        expect(result).toBe('S');
    });

    test("Teste 2", () => {
        const photos = [
            { width: 6, height: 6 },
            { width: 6, height: 6 }
        ];
        const result = canFitPhotosInPage(photos, 10, 10);

        expect(result).toBe('N');
    });

    test("Teste 3", () => {
        const photos = [
            { width: 4, height: 9 },
            { width: 6, height: 5 }
        ];
        const result = canFitPhotosInPage(photos, 13, 8);

        expect(result).toBe('N');
    });

});