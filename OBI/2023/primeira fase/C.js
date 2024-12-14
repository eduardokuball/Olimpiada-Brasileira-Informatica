// Seta um novo método de array
Array.prototype.allIndexesOf = function(el) {
    let indexes = [];

    this.forEach((e, i) => {
        if (this[i] === el) {
            indexes.push(i);
        };
    });
    
    return indexes;
};

// Seta um novo método de array
Array.prototype.isSubsequenceOf = function(arr) {
    if (arr.length < this.length) return false;

    let indexes = this.map(el => arr.allIndexesOf(el));

    let readjustedIndexes = indexes.map((e, i, arr) => {
        if (i === 0) return e;

        let previousArray = arr[i-1];

        return e
            .filter(e => e >= Math.max(...previousArray));
    });

    return readjustedIndexes
        .every(e => e.length > 0);
};

let sizesLine = prompt();
let sizes = sizesLine
    .split(' ')
    .slice(0, 2)
    .map(e => parseInt(e));

let sequenceLine = prompt();
let sequence = sequenceLine
    .split(' ')
    .slice(0, sizes[0])
    .map(e => parseInt(e));

let subsequenceLine = prompt();
let subsequence = subsequenceLine
    .split(' ')
    .slice(0, sizes[1])
    .map(e => parseInt(e));

let isSubsequence = subsequence.isSubsequenceOf(sequence);
console.log(isSubsequence ? 'S' : 'N');