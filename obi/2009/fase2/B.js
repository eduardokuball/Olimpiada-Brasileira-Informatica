function initializeVector(size) {
    return Array.from({ length: size }, (_, index) => index + 1);
}

function swapElements(word, indexx, indexy) {
    while (indexx < indexy) {
        [word[indexx], word[indexy]] = [word[indexy], word[indexx]];
        indexx++;
        indexy--;
    }
}

function sumElements(word, indexx, indexy) {
    return word.slice(indexx, indexy + 1).reduce((acc, curr) => acc + curr, 0);
}

export default function processArrayCommands(size, commandsCount, commandsList) {
    const word = initializeVector(size);
    const sums = [];


    for (let i = 0; i < commandsCount; i++) {
        let [command, indexx, indexy] = commandsList[i];

        indexx = Number(indexx) - 1;
        indexy = Number(indexy) - 1;

        if (command === "I") {
            swapElements(word, indexx, indexy);
        } else if (command === "S") {
            const sum = sumElements(word, indexx, indexy);
            sums.push(sum);
        }
    }

    return sums;
}