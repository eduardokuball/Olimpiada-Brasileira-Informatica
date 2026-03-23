const size = Number(prompt());
const S = Number(prompt());

const numbers = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    })

function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function generateIntervals(lista) {
    const intervals = [];

    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            const intervalo = lista.slice(i, j + 1);
            if (intervalo.length >= 1) {
                intervals.push(intervalo);
            }
        }
    }

    return intervals;
}

const intervals = generateIntervals(numbers);

numbers.forEach((number) => {
    intervals.push([number]);
});

let count = 0;

intervals.forEach((intervals) => {
    const sum = sumArray(intervals);
    if (sum === S) {
        count++;
    }
});

console.log(count);
console.log(intervals);