function MMC(...values) {
    if (values.length === 1) {
        const [ mmc ] = values;
        return mmc;    
    }

    const minValue = Math.min(...values);

    let mmc = 1;

    for (let i = minValue; i >= 1; i--) {
        const dividesEveryone = values.every(value => value % i === 0);
        
        if (dividesEveryone) {
            mmc = i;
            break;
        }
    }

    return mmc;
}

const [ elements, operationsQuantity ] = prompt()
    .split(' ', 2).map(e => parseInt(e));

const sequence = prompt()
    .split(' ', elements).map(e => parseInt(e));

const operations = [];

for (let i = 1; i <= operationsQuantity; i++) {
    const operation = prompt()
        .split(' ', 3).map(e => parseInt(e));

    operations.push(operation);
}

// Callbacks que cada ação executa (NÃO MOVA ISSO PARA CIMA, isso deve estar exatamente aqui)
const updateOperation = (index, value) => sequence[index] = value;
const getCandidatesOf = (startIndex, endIndex) => {
    const subsequence = sequence.slice(startIndex, endIndex);
    let candidates = 0;

    subsequence.forEach((_, sliceSize) => {
        subsequence.forEach((_, i) => {
            if (i + sliceSize > subsequence.length-1) return;

            const subSubsequence = subsequence.slice(i, i + sliceSize+1)

            const mmc = MMC(...subSubsequence)
            if (mmc > 1) candidates++;
        });
    });

    console.log(candidates);
};


operations.forEach(([ type, param1, param2 ]) => {
    const typesMap = {
        '1': updateOperation,
        '2': getCandidatesOf,
    };

    typesMap[String(type)](param1-1, param2);
});
