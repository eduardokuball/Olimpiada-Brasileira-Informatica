// Main Function - O(n^2)
export default function stairway(slabs) {
    const clone = [...slabs];

    const findGoodSlabs = (s, idx) => {
        const leftIsUnknown = clone[idx-1] === -1;
        const rightIsUnknown = clone[idx+1] === -1;
        return s !== -1 && (leftIsUnknown && rightIsUnknown);
    };
    
    const findSlabs = (s, idx) => {
        const left = clone[idx-1];
        const right = clone[idx+1];
        const leftIsKnown = left !== undefined && left !== -1;
        const rightIsKnown = right !== undefined && right !== -1;
        return s === -1 && (leftIsKnown || rightIsKnown);
    };

    while (clone.some(s => s === -1)) {
        // Um "good slab" é um slab cujo ambos os adjacentes são desconhecidos
        const hasGoodSlabs = clone.some(findGoodSlabs);
        const index = clone.findIndex(hasGoodSlabs ? findGoodSlabs : findSlabs);

        const slab = clone[index];
        const left = clone[index-1];
        const right = clone[index+1];

        if (hasGoodSlabs) {
            clone[index - 1] = slab + 1;
            clone[index + 1] = slab + 1;
            continue;
        }

        if (left === undefined || left === -1) {
            clone[index] = right + 1;
            continue;
        }

        if (right === undefined || right === -1) {
            clone[index] = left + 1;
            continue;
        }
        
        if (left === right) clone[index] = left + 1;
        else clone[index] = Math.ceil((left + right) / 2);
    }

    return clone;
}
