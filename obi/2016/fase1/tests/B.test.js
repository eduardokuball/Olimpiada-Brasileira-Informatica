import isCodeBalanced from "../B.js";

describe("2016 -> Fase 1 -> Chaves", () => {

    test("Teste 1", () => {
        const code = [
  '#', 'i', 'n', 'c', 'l',  'u', 'd', 'e',
  ' ', '<', 's', 't', 'd',  'i', 'o', '.',
  'h', '>', 'i', 'n', 't',  ' ', 'm', 'a',
  'i', 'n', '(', 'v', 'o',  'i', 'd', ')',
  '{', 'p', 'r', 'i', 'n',  't', 'f', '(',
  '"', 'H', 'e', 'l', 'l',  'o', ' ', 'W',
  'o', 'r', 'l', 'd', '\\', 'n', '"', ')',
  ';', '}'
]
        const result = isCodeBalanced(code);
        expect(result).toBe('S');
    });

    test("Teste 2", () => {
        const code = [
  '{', 'I', '{', 'N', '{', '}', 'F',
  '{', ']', ')', '}', 'O', '}', 'R',
  '{', '}', 'M', '}', 'A', '{', 'T',
  '}', 'I', '{', 'C', '@', '!', '!',
  '{', 'o', 'n', 'z', 'e', '}', '!',
  '!', '}'
]
        const result = isCodeBalanced(code);
        expect(result).toBe('S');
    });

    test("Teste 3", () => {
        const code = [
  '{', '{', '}',
  '}', '{', '{',
  '}', '}', '}'
]
        const result = isCodeBalanced(code);
        expect(result).toBe('N');
    });

    test("Teste 4", () => {
        const code = [
  '{', '{', '{', '3', '}',
  '}', '}', '{', '{', '{',
  '2', '}', '}', 'a', '{',
  '{', '1', '}', '}', '{',
  '0', '}'
]
        const result = isCodeBalanced(code);
        expect(result).toBe('N');
    });



});