export default function maximizeSorry(cardLength, phrases) {

    // Ordena por número de "sorry" decrescente
    phrases.sort((a, b) => b.sorry_occurrences - a.sorry_occurrences);

    let remainingStorage = cardLength;
    let sorryCount = 0;

    for (const phrase of phrases) {
        if (phrase.length > remainingStorage) continue;

        remainingStorage -= phrase.length;
        sorryCount += phrase.sorry_occurrences;
    }

    return sorryCount;
}