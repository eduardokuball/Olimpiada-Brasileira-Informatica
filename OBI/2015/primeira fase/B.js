function getPieces(quantity){
    const pieces = [];
    for(let i = 0; i < quantity; i++){
        const [start,word,end] = prompt()
            .split(' ', 3);
        const piece = {
            start: parseInt(start),
            word: word.toUpperCase(),
            end: parseInt(end)
        };
        if(start == 0){
            assembledWord += word;
            lastEnd = end;
        } else {
            pieces.push(piece);
        }
    }
    return pieces;
};

function assembleWord(words,assembledWord,quantity){
    while(true){
        for(let i = 0; i < words.length; i++){
            if(lastEnd == words[i].start){
                assembledWord += words[i].word;
                lastEnd = words[i].end;
                words.splice(i, 1);
                break;
            }
        }
        if(assembledWord.length == quantity) return assembledWord;
    }
};

let assembledWord = '';
let lastEnd = null;

const quantity = parseInt(prompt());

const pieces = getPieces(quantity);

const word = assembleWord(pieces, assembledWord,quantity);

console.log(word.toUpperCase());




