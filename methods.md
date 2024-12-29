````js

NUMBER

let numbers = 2.6;

// toExponential
// Converte um número em notação exponencial.
console.log(numbers.toExponential(1)); // 2.6e+0
// toFixed
// Formata um número usando notação de ponto fixo.
console.log(numbers.toFixed(0)); // 3
// toPrecision
// Formata um número para um comprimento especificado.
console.log(numbers.toPrecision(2)); // 2.6

// Propriedades de Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Métodos de Math

// Math.abs
// Retorna o valor absoluto de um número.
console.log(Math.abs(-5)); // 5

// Math.ceil
// Arredonda um número para cima para o inteiro mais próximo.
console.log(Math.ceil(2.3)); // 3

// Math.floor
// Arredonda um número para baixo para o inteiro mais próximo.
console.log(Math.floor(2.7)); // 2

// Math.round
// Arredonda um número para o inteiro mais próximo.
console.log(Math.round(2.5)); // 3

// Math.max
// Retorna o maior de zero ou mais números.
console.log(Math.max(1, 3, 2)); // 3

// Math.min
// Retorna o menor de zero ou mais números.
console.log(Math.min(1, 3, 2)); // 1

// Math.pow
// Retorna a base elevada ao expoente.
console.log(Math.pow(2, 3)); // 8

// Math.sqrt
// Retorna a raiz quadrada de um número.
console.log(Math.sqrt(16)); // 4

// Math.random
// Retorna um número pseudo-aleatório entre 0 e 1.
console.log(Math.random()); // Exemplo: 0.123456789

// Math.trunc
// Retorna a parte inteira de um número, descartando suas casas decimais.
console.log(Math.trunc(4.9)); // 4

// Math.sin
// Retorna o seno de um número (em radianos).
console.log(Math.sin(Math.PI / 2)); // 1

// Math.cos
// Retorna o cosseno de um número (em radianos).
console.log(Math.cos(Math.PI)); // -1

// Math.tan
// Retorna a tangente de um número (em radianos).
console.log(Math.tan(Math.PI / 4)); // 1

// Math.log
// Retorna o logaritmo natural (base E) de um número.
console.log(Math.log(1)); // 0

// Math.log10
// Retorna o logaritmo de base 10 de um número.
console.log(Math.log10(100)); // 2

// Math.log2
// Retorna o logaritmo de base 2 de um número.
console.log(Math.log2(8)); // 3

// Math.exp
// Retorna E elevado à potência de um número.
console.log(Math.exp(1)); // 2.718281828459045

// Math.cbrt
// Retorna a raiz cúbica de um número.
console.log(Math.cbrt(27)); // 3

// Math.hypot
// Retorna a raiz quadrada da soma dos quadrados dos seus argumentos.
console.log(Math.hypot(3, 4)); // 5

// Math.sign
// Retorna o sinal de um número, indicando se o número é positivo, negativo ou zero.
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1

// Math.clz32
// Retorna o número de zeros à esquerda na representação binária de um número de 32 bits.
console.log(Math.clz32(1)); // 31

// Math.imul
// Realiza a multiplicação de dois números como inteiros de 32 bits.
console.log(Math.imul(2, 4)); // 8

// Math.fround
// Retorna a representação de precisão simples de 32 bits de um número.
console.log(Math.fround(5.5)); // 5.5

// Math.expm1
// Retorna exp(x) - 1.
console.log(Math.expm1(1)); // 1.718281828459045

// Math.log1p
// Retorna o logaritmo natural de 1 + um número.
console.log(Math.log1p(1)); // 0.6931471805599453

STRING

let str = "";

// at
str = "Hello";
console.log(str.at(1)); // e

// charAt
str = "Hello";
console.log(str.charAt(1)); // e

// charCodeAt
str = "Hello";
console.log(str.charCodeAt(1)); // 101

// concat
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Hello World

// endsWith
str = "Hello World";
console.log(str.endsWith("World")); // true

// fromCharCode
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello

// fromCodePoint
console.log(String.fromCodePoint(128512)); // 😀

// includes
str = "Hello World";
console.log(str.includes("World")); // true

// indexOf
str = "Hello World";
console.log(str.indexOf("World")); // 6

// lastIndexOf
str = "Hello World World";
console.log(str.lastIndexOf("World")); // 12

// length
str = "Hello";
console.log(str.length); // 5

// localeCompare
str1 = "a";
str2 = "b";
console.log(str1.localeCompare(str2)); // -1

// match
str = "Hello World";
console.log(str.match(/World/)); // ["World"]

// matchAll
str = "test1test2";
let matches = str.matchAll(/test/g);
for (let match of matches) {
    console.log(match[0]); // test, test
}

// normalize
str = "\u004F\u030C";
console.log(str.normalize()); // Ǒ

// padEnd
str = "Hello";
console.log(str.padEnd(10, ".")); // Hello.....

// padStart
str = "Hello";
console.log(str.padStart(10, ".")); // .....Hello

// raw
console.log(String.raw`Hello\nWorld`); // Hello\nWorld

// repeat
str = "Hello";
console.log(str.repeat(3)); // HelloHelloHello

// replace
str = "Hello World";
console.log(str.replace("World", "Everyone")); // Hello Everyone

// replaceAll
str = "Hello World World";
console.log(str.replaceAll("World", "Everyone")); // Hello Everyone Everyone

// search
str = "Hello World";
console.log(str.search("World")); // 6

// slice
str = "Hello World";
console.log(str.slice(0, 5)); // Hello

// split
str = "Hello World";
console.log(str.split(" ")); // ["Hello", "World"]

// substring
str = "Hello World";
console.log(str.substring(0, 5)); // Hello

// toLocaleLowerCase
str = "HELLO WORLD";
console.log(str.toLocaleLowerCase()); // hello world

// toLocaleUpperCase
str = "hello world";
console.log(str.toLocaleUpperCase()); // HELLO WORLD

// toLowerCase
str = "HELLO WORLD";
console.log(str.toLowerCase()); // hello world

// toUpperCase
str = "hello world";
console.log(str.toUpperCase()); // HELLO WORLD

// toString
str = "Hello World";
console.log(str.toString()); // Hello World

// trim
str = "  Hello World  ";
console.log(str.trim()); // Hello World

// trimEnd
str = "  Hello World  ";
console.log(str.trimEnd()); // "  Hello World"

// trimStart
str = "  Hello World  ";
console.log(str.trimStart()); // "Hello World  "

// valueOf
str = "Hello World";
console.log(str.valueOf()); // Hello World

ARRAY

// Array.apply
// O método apply é usado para chamar uma função com um dado valor this e argumentos fornecidos como uma matriz (ou um objeto semelhante a um array).
function sum(a, b) {
    return a + b;
}
console.log(sum.apply(null, [1, 2])); // 3

// Array.bind
// O método bind cria uma nova função que, quando chamada, tem seu this definido para o valor fornecido, com uma sequência dada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
let module = {
    x: 42,
    getX: function() {
        return this.x;
    }
};
let unboundGetX = module.getX;
let boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42

// Array.call
// O método call é usado para chamar uma função com um dado valor this e argumentos fornecidos individualmente.
console.log(sum.call(null, 1, 2)); // 3

// Array.from
// O método from cria uma nova instância de Array a partir de um objeto semelhante a um array ou iterável.
console.log(Array.from('foo')); // ['f', 'o', 'o']

// Array.isArray
// O método isArray retorna true se um objeto é uma array, e false se não é.
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('foo')); // false

// Array.of
// O método of cria uma nova instância Array com um número variável de elementos passados como argumento.
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of('foo', 'bar')); // ['foo', 'bar']

// Array.toString
// O método toString retorna uma string representando os elementos do array.
let array = [1, 2, 3];
console.log(array.toString()); // "1,2,3"

// Array.concat
// O método concat é usado para mesclar dois ou mais arrays. Este método não altera os arrays existentes, mas retorna um novo array.
let array1 = [1, 2];
let array2 = [3, 4];
console.log(array1.concat(array2)); // [1, 2, 3, 4]

// Array.copyWithin
// O método copyWithin copia parte de um array para outra localização no mesmo array e o retorna, sem modificar seu tamanho.
let array3 = [1, 2, 3, 4, 5];
console.log(array3.copyWithin(0, 3)); // [4, 5, 3, 4, 5]

// Array.entries
// O método entries retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.
let array4 = ['a', 'b', 'c'];
let iterator = array4.entries();
for (let entry of iterator) {
    console.log(entry); // [0, 'a'], [1, 'b'], [2, 'c']
}

// Array.every
// O método every testa se todos os elementos no array passam no teste implementado pela função fornecida.
let isBelowThreshold = (currentValue) => currentValue < 40;
let array5 = [1, 30, 39, 29, 10, 13];
console.log(array5.every(isBelowThreshold)); // true

// Array.fill
// O método fill preenche todos os elementos de um array do índice inicial a um índice final com um valor estático.

// fill decente
const numbers = Array(squareSide ** 2).fill()
    .map((_, i) => i + 1);

let array6 = [1, 2, 3, 4];
console.log(array6.fill(0, 2, 4)); // [1, 2, 0, 0]

// Array.filter
// O método filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter(word => word.length > 6);
console.log(result); // ['exuberant', 'destruction', 'present']

// Array.find
// O método find retorna o primeiro elemento no array que satisfaz a função de teste fornecida. Caso contrário, undefined é retornado.
let array7 = [5, 12, 8, 130, 44];
let found = array7.find(element => element > 10);
console.log(found); // 12

// Array.findIndex
// O método findIndex retorna o índice do primeiro elemento no array que satisfaz a função de teste fornecida. Caso contrário, -1 é retornado.
let array8 = [5, 12, 8, 130, 44];
let isLargeNumber = (element) => element > 13;
console.log(array8.findIndex(isLargeNumber)); // 3

// Array.flat
// O método flat cria um novo array com todos os elementos sub-array concatenados a ele de forma recursiva até a profundidade especificada.
let array9 = [1, 2, [3, 4, [5, 6]]];
console.log(array9.flat(2)); // [1, 2, 3, 4, 5, 6]

// Array.flatMap
// O método flatMap primeiro mapeia cada elemento usando uma função de mapeamento, depois aplana o resultado em um novo array.
let array10 = [1, 2, 3, 4];
console.log(array10.flatMap(x => [x * 2])); // [2, 4, 6, 8]

// Array.forEach
// O método forEach executa uma dada função em cada elemento de um array.
let array11 = ['a', 'b', 'c'];
array11.forEach(element => console.log(element)); // 'a', 'b', 'c'

// Array.includes
// O método includes determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
let array12 = [1, 2, 3];
console.log(array12.includes(2)); // true

// Array.indexOf
// O método indexOf retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1

// Array.join
// O método join junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"

// Array.keys
// O método keys retorna um novo objeto Array Iterator que contém as chaves para cada índice no array.
let array13 = ['a', 'b', 'c'];
let iterator1 = array13.keys();
for (let key of iterator1) {
    console.log(key); // 0, 1, 2
}

// Array.lastIndexOf
// O método lastIndexOf retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo')); // 3

// Array.map
// O método map cria um novo array com os resultados da chamada de uma função fornecida em cada elemento deste array.
let array14 = [1, 4, 9, 16];
let map1 = array14.map(x => x * 2);
console.log(map1); // [2, 8, 18, 32]

// Array.pop
// O método pop remove o último elemento de um array e retorna aquele elemento. Este método altera o tamanho do array.
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // "tomato"
console.log(plants); // ["broccoli", "cauliflower", "cabbage", "kale"]

// Array.push
// O método push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

// Array.reduce
// O método reduce executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
let array15 = [1, 2, 3, 4];
let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array15.reduce(reducer)); // 10

// Array.reduceRight
// O método reduceRight aplica uma função a um acumulador e a cada valor do array (da direita para a esquerda) para reduzi-lo a um único valor.
let array16 = [[0, 1], [2, 3], [4, 5]];
let result1 = array16.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result1); // [4, 5, 2, 3, 0, 1]

// Array.reverse
// O método reverse inverte a ordem dos elementos de um array in-place. O primeiro elemento do array se torna o último, e o último elemento do array se torna o primeiro.
let array17 = ['one', 'two', 'three'];
console.log(array17.reverse()); // ["three", "two", "one"]

// Array.shift
// O método shift remove o primeiro elemento de um array e retorna esse elemento. Este método altera o tamanho do array.
let array18 = [1, 2, 3];
let firstElement = array18.shift();
console.log(array18); // [2, 3]
console.log(firstElement); // 1

// Array.slice
// O método slice retorna uma cópia superficial de uma porção de um array em um novo array objeto selecionado desde o início até um fim (fim não incluído) onde início e fim representam o índice de itens naquele array. O array original não é modificado.
let array19 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(array19.slice(2)); // ["camel", "duck", "elephant"]
console.log(array19.slice(2, 4)); // ["camel", "duck"]

// Array.some
// O método some testa se ao menos um dos elementos no array passa no teste implementado pela função fornecida.
let array20 = [1, 2, 3, 4, 5];
let even = (element) => element % 2 === 0;
console.log(array20.some(even)); // true

// Array.sort
// O método sort ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código Unicode dos elementos.
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

// Array.splice
// O método splice altera o conteúdo de um array removendo elementos existentes e/ou adicionando novos elementos.
let array21 = ['Jan', 'March', 'April', 'June'];
array21.splice(1, 0, 'Feb');
console.log(array21); // ["Jan", "Feb", "March", "April", "June"]
array21.splice(4, 1, 'May');
console.log(array21); // ["Jan", "Feb", "March", "April", "May"]

// Array.toLocaleString
// O método toLocaleString retorna uma string representando os elementos do array. Os elementos são convertidos em strings usando seus próprios métodos toLocaleString e essas strings são separadas por uma string específica de local (como uma vírgula "," por padrão).
let array22 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
let localeString = array22.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString); // "1,a,12/21/1997, 2:12:00 PM"

// Array.toString
// O método toString retorna uma string representando os elementos do array.
let array23 = [1, 2, 3];
console.log(array23.toString()); // "1,2,3"

// Array.unshift
// O método unshift adiciona um ou mais elementos no início de um array e retorna o novo comprimento desse array.
let array24 = [1, 2, 3];
console.log(array24.unshift(4, 5)); // 5
console.log(array24); // [4, 5, 1, 2, 3]

// Array.values
// O método values retorna um novo objeto Array Iterator que contém os valores para cada índice no array.
let array25 = ['a', 'b', 'c'];
let iterator2 = array25.values();
for (let value of iterator2) {
    console.log(value); // 'a', 'b', 'c'
}