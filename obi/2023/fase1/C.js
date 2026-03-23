Array.prototype.allIndexesOf = function(el) {
    const indexes = [];

    this.forEach((e, i) => {
        if (this[i] === el) {
            indexes.push(i);
        }
    });
    
    return indexes;
};

Array.prototype.isSubsequenceOf = function(arr) {
    if (arr.length < this.length) return false;

    const indexes = this.map(el => arr.allIndexesOf(el));

    const readjustedIndexes = indexes.map((e, i, arr) => {
        if (i === 0) return e;

        const previousArray = arr[i-1];

        return e
            .filter(e => e >= Math.max(...previousArray));
    });

    return readjustedIndexes
        .every(e => e.length > 0);
};

const sizesLine = prompt();
const sizes = sizesLine
    .split(' ')
    .slice(0, 2)
    .map(e => parseInt(e));

const sequenceLine = prompt();
const sequence = sequenceLine
    .split(' ')
    .slice(0, sizes[0])
    .map(e => parseInt(e));

const subsequenceLine = prompt();
const subsequence = subsequenceLine
    .split(' ')
    .slice(0, sizes[1])
    .map(e => parseInt(e));

const isSubsequence = subsequence.isSubsequenceOf(sequence);
console.log(isSubsequence ? 'S' : 'N');