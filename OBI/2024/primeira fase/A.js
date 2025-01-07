function ogro(left, right){
    if(left > right) return right + left
    return 2 * (right - left)
}
const left = Number(prompt());
const right = Number(prompt());

const result = ogro(left, right);

console.log(result);