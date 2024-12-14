let disks = Number(prompt('digite a quantidade de discos'));

function getMoves(){
    let moves = Math.pow(2, disks) - 1;
    return moves;
};

console.log(getMoves());