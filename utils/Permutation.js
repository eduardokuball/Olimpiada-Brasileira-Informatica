class Permutations {  
static withRepetition(arr, length) {
    if (length === 1) return arr.map((item) => [item]);
    
    const permutations = [];
    const smallerPermutations = Permutations.withRepetition(arr, length - 1);
    
    for (const item of arr) {
        for (const smaller of smallerPermutations) {
            permutations.push([item, ...smaller]);
        }
    }
    
        return permutations;
}
static withoutRepetition(arr) {
    if (arr.length === 0) return [[]];
    const permutations = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const smallerPermutations = Permutations.withoutRepetition(remaining);

        for (const smaller of smallerPermutations) {
            permutations.push([current, ...smaller]);
        }
}   
    return permutations;
}
}


export default Permutations;


