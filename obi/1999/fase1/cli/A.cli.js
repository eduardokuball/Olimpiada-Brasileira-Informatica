import { input, output } from '../../../utils/io.js';
import genome from '../A.js';

// Formatando a saída...
function formattedOutput(substrings, inverteds) {
    output(
        substrings.length === 0
        ? 'ocorrência direta: 0'
        : `ocorrência direta: ${substrings.join(' ')}`
    );

    output(
        inverteds.length === 0
        ? 'ocorrência complementar invertida: 0'
        : `ocorrência complementar invertida: ${inverteds.join(' ')}`
    );
}

const [substringSize, stringSize] = input().split(' ').map(Number);
const substring = input().toUpperCase().slice(0, substringSize);
const string = input().toUpperCase().slice(0, stringSize);
formattedOutput(...genome(substring, string));
