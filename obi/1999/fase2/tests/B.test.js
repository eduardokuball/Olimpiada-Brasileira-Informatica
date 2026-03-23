import simultaneousPeople from "../B"; 

describe('1999 -> fase 2 -> Restaurante', () => {
    
    test('Teste 1', () => {
        const lines = [ '3', '14 67 98', '1890 1900 2123' ];
    
        expect(simultaneousPeople(lines)).toBe(3);
        });
    
    test('Teste 2', () => {
        const lines = [ '2', '200 1800', '1543 2324' ];

        expect(simultaneousPeople(lines)).toBe(1);
        });
        
});