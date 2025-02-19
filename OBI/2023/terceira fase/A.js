import Permutations from "../../../utils/permutation.js";
function isBalanced(array) {
    return array[0] == array[1] + array[2] &&
    array[1] + array[2] == array[3] + array[4] + array[5];
}

function verifyBalanced(){
    for(let i = 0; i < permutations.length; i++) {
        if(isBalanced(permutations[i])) {
            return 'S';
        }
    };
    return 'N';
};

const array = prompt()
    .split(' ',6)
    .map(e => parseInt(e));

const permutations = Permutations.withoutRepetition(array);

console.log(verifyBalanced());