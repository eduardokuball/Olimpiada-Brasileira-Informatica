const number = parseInt(prompt());

const start = parseInt(prompt());

const end = parseInt(prompt());

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
    numbers.sort((a,b) => a - b);
    return [numbers[0], numbers[numbers.length - 1]];
};

const search = searchNumbers(number,start,end);

console.log(search[0]);
console.log(search[1]);