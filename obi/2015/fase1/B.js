export default function assembleFinalWord(quantity, rawPieces = []) {

    let assembledWord = '';
    let lastEnd = null;

    const pieces = [];

    for (const [start, word, end] of rawPieces) {
        const piece = {
            start: Number(start),
            word: word.toUpperCase(),
            end: Number(end)
        };

        if (piece.start === 0) {
            assembledWord += piece.word;
            lastEnd = piece.end;
        } else {
            pieces.push(piece);
        }
    }

    while (true) {
        let found = false;

        for (let i = 0; i < pieces.length; i++) {
            if (lastEnd === pieces[i].start) {
                assembledWord += pieces[i].word;
                lastEnd = pieces[i].end;
                pieces.splice(i, 1);
                found = true;
                break;
            }
        }

        if (!found) break;

        if (assembledWord.length === quantity) {
            return assembledWord;
        }
    }

    return assembledWord;
}