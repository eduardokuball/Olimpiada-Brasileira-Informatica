const [cardLength, phrasesQuantity] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const phrases = [];

for (let i = 0; i < phrasesQuantity; i++) {
    const [phraseLength, sorryOccurrences] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e));

    phrases.push({
        length: phraseLength,
        sorry_occurrences: sorryOccurrences
    });
}

// Ordena por sorry_occurrences de forma decrescente:
phrases.sort((a, b) => b.sorry_occurrences - a.sorry_occurrences);

let remainingStorage = cardLength;
let sorryCount = 0;

phrases.forEach(phrase => {
    if (phrase.length > remainingStorage) return;

    remainingStorage -= phrase.length;
    sorryCount += phrase.sorry_occurrences;
});

console.log(sorryCount);
