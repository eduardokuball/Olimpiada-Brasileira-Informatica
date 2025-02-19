const quantiy = parseInt(prompt());
const slices = prompt()
    .split(" ", quantiy)
    .map((e) => parseInt(e));

const rotatepizza = [...slices, ...slices, ...slices];

let possibilities = [];

for (let size = 1; size <= slices.length; size++) { 
    for (let i = 0; i <= rotatepizza.length - size; i++) { 
        possibilities.push(rotatepizza.slice(i, i + size));
    }
}

possibilities = possibilities.filter((array) => array.length <= quantiy);

const sums = possibilities.map((array) => array.reduce((a, b) => a + b, 0));

if(Math.max(...sums) > 0){
    console.log(Math.max(...sums));
} else {
    console.log(0);
}
