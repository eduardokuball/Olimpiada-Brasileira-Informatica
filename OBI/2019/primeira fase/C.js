const [size, search] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });

const sequence = prompt()
    .split(" ")
    .slice(0, size)
    .map((e) => {
        return parseInt(e);
    });

let prefixSum = 0;
let count = 0;
const prefixMap = { 0: 1 }; 

for (let i = 0; i < size; i++) {
    prefixSum += sequence[i];

    if (prefixMap.hasOwnProperty(prefixSum - search)) {
        count += prefixMap[prefixSum - search];
    }

    prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1;
}

console.log(count);
