const trees = parseInt(prompt());
let count = 0;

for(let i = 2; i < trees; i++) {
    for(let j = 2; j < trees; j++) {
        const dimension = i * j;
        const treesInside = (i - 1) * (j - 1);
        const total = dimension + treesInside;
        if(total == trees){
            count++;
        }
    }
};

console.log(Math.ceil(count / 2));

