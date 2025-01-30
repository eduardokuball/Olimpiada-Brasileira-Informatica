function searchNumbers(number,start,end) {
    const numbers = [];
    for(let i = start; i <= end; i++){
        const array = String(i)
            .split('')
            .map(e => parseInt(e));
        const sum = array.reduce((sum,i) => sum + i, 0);
        if(sum == number){
            numbers.push(i);
        }
    }
    return numbers;
};

const number = parseInt(prompt());
const start = parseInt(prompt());
const end = parseInt(prompt());

const maxSearch = Math.max(...searchNumbers(number,start,end));

const minSearch = Math.min(...searchNumbers(number,start,end));

console.log(minSearch);
console.log(maxSearch);