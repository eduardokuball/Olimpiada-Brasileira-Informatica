import { input, output } from '../../../utils/io.js';
import maximizeSorry from '../D.js';

// Lê primeira linha
const [cardLength, phrasesQuantity] = input()
    .split(' ')
    .map(Number);

// Lê frases já formatando
const phrases = [];

for (let i = 0; i < phrasesQuantity; i++) {
    const [phraseLength, sorryOccurrences] = input()
        .split(' ')
        .map(Number);

    phrases.push({
        length: phraseLength,
        sorry_occurrences: sorryOccurrences
    });
}

// Chama a função raiz
const result = maximizeSorry(cardLength, phrases);

// Output formatado
output(result);