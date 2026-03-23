const boxs = parseInt(prompt());
const boxWeights = prompt()
    .split(" ",boxs)
    .map((e) => {
        return parseInt(e);
    });

boxWeights.sort((a, b) => a - b);

boxWeights.unshift(0);

let result = 'S';

for (let i = 0; i < boxs; i++) {
    if (boxWeights[i + 1] - boxWeights[i] > 8) {
        result = 'N';
        break;
    }
}

console.log(result);
