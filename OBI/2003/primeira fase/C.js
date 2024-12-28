const disks = Number(prompt('digite a quantidade de discos'));

function getMoves() {
    const moves = Math.pow(2, disks) - 1;
    return moves;
}

console.log(getMoves());